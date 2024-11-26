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
	import { mapActions } from 'vuex';

	export default defineComponent({
		name: 'Header',
		data() {
			return {
				allCategories: [] as any[], // Store top-level categories as an array
			};
		},
		computed: {
			// Return all categories as they are already filtered by parent_category_id === "root"
			filteredCategories() {
				return this.allCategories;
			},
		},
		methods: {
			...mapActions('products', {
				fetchCategoriesFromStore: 'fetchProducts', // Map the Vuex action
			}),
			async fetchCategories() {
				try {
					await this.fetchCategoriesFromStore();
					// Extract categories from the Vuex state
					const rootCategory = this.$store.state.products.categories;

					// Validate that `rootCategory` is an object and extract its `categories` property
					if (
						rootCategory &&
						rootCategory.categories &&
						Array.isArray(rootCategory.categories)
					) {
						this.allCategories = rootCategory.categories; // Set the top-level categories
					} else {
						console.error('Invalid rootCategory structure:', rootCategory);
					}
				} catch (error) {
					console.error('Error fetching categories:', error);
				}
			},
			selectCategory(category) {
				console.log('Selected Category:', category);
				// Handle category selection (e.g., update sidebar or Vuex state)
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
