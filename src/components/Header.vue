<template>
	<header class="header">
		<div class="logo">
			<h1>My Store</h1>
		</div>
		<nav class="nav">
			<ul>
				<li v-for="category in filteredCategories" :key="category.id">
					<button @click="selectCategory(category)" class="nav-link">
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
				allCategories: [] as any[], // Store top-level categories
			};
		},
		computed: {
			// Filter top-level categories (parent_category_id === "root")
			filteredCategories() {
				return this.allCategories;
			},
			...mapGetters('products', {
				categoriesId: 'vuexSubcategories', // Access `vuexMainCategories` from the `products` module
			}),
		},
		methods: {
			...mapActions('products', {
				fetchCategoriesFromStore: 'fetchProducts', // Correctly map `fetchProducts` action
				selectCategoryInStore: 'setSelectedCategory', // Correctly map Vuex action to `selectCategoryInStore`
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
				// Use the correctly mapped Vuex action to select a category

				this.selectCategoryInStore(category);
			},
		},
		async mounted() {
			await this.fetchCategories(); // Fetch categories on mount
		},
	});
</script>

<style scoped>
	.header {
		background-color: #2c3e50;
		color: white;
		padding: 10px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav {
		display: flex;
		gap: 20px;
	}

	.nav-link {
		background: none;
		border: none;
		color: white;
		font-size: 16px;
		cursor: pointer;
	}

	.nav-link:hover {
		text-decoration: underline;
	}
</style>
