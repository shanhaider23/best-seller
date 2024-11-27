<template>
	<header class="header">
		<div class="header__logo">
			<img
				src="../assets/logo.jpg"
				alt="Product Image"
				class="header__logo-image"
			/>
		</div>
		<nav class="header__nav">
			<ul class="header__nav-list">
				<li
					class="header__nav-item"
					v-for="category in filteredCategories"
					:key="category.id"
				>
					<button @click="selectCategory(category)" class="header__nav-link">
						{{ category.name.en || category.name.dk }}
					</button>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { mapActions, mapGetters } from 'vuex';

	export default defineComponent({
		name: 'Header',
		data() {
			return {
				allCategories: [] as any[],
			};
		},
		computed: {
			filteredCategories() {
				return this.allCategories;
			},
			...mapGetters('products', {
				categoriesId: 'vuexSubcategories',
			}),
		},
		methods: {
			...mapActions('products', {
				fetchCategoriesFromStore: 'fetchProducts',
				selectCategoryInStore: 'setSelectedCategory',
			}),
			async fetchCategories() {
				try {
					await this.fetchCategoriesFromStore();
					const rootCategory = this.$store.state.products.categories;

					if (
						rootCategory &&
						rootCategory.categories &&
						Array.isArray(rootCategory.categories)
					) {
						this.allCategories = rootCategory.categories;
					} else {
						console.error('Invalid rootCategory structure:', rootCategory);
					}
				} catch (error) {
					console.error('Error fetching categories:', error);
				}
			},
			selectCategory(category) {
				this.selectCategoryInStore(category);
			},
		},
		async mounted() {
			await this.fetchCategories(); // Fetch categories on mount
		},
	});
</script>

<style lang="scss" scoped>
	@use '../scss/Header.scss';
</style>
