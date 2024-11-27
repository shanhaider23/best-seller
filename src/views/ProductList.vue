<template>
	<div>
		<h1 class="text-2xl font-bold mb-4">Product List</h1>
		{{ subCategoriesId }}

		<!-- Show loading message if products are not loaded -->

		<div v-if="products.length === 0">
			<p>Loading products...</p>
		</div>

		<!-- Display products -->

		<div
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
		>
			<ProductCard
				v-for="product in filteredProducts"
				:key="product.id"
				:product="product"
			/>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { mapState, mapGetters } from 'vuex';
	import ProductCard from '../components/ProductCard.vue';

	export default defineComponent({
		name: 'ProductList',
		components: {
			ProductCard,
		},
		computed: {
			...mapState({
				products: (state: any) => state.products.products,
			}),
			...mapGetters('products', {
				mainCategories: 'vuexMainCategories',
				subCategoriesId: 'vuexSubcategoriesIds',
			}),
			filteredProducts() {
				// If no category is selected, return all products
				if (!this.subCategoriesId) {
					return this.products;
				}

				return this.products.filter((product) =>
					product.categories.includes(this.subCategoriesId)
				);
			},
		},
		methods: {
			fetchProductsIfNeeded() {
				if (this.products.length === 0) {
					this.$store.dispatch('products/fetchProducts');
				}
			},
		},
		mounted() {
			this.fetchProductsIfNeeded();
		},
	});
</script>

<style scoped>
	/* Optional: Add additional styles */
</style>
