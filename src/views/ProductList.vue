<template>
	<div class="product-list">
		<div v-if="products.length === 0" class="product-list__loading">
			<p>Loading products...</p>
		</div>

		<div class="product-list__grid">
			<ProductCard
				v-for="product in filteredProducts"
				:key="product.id"
				:product="product"
				class="product-list__card"
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

<style scoped lang="scss">
	@import '../scss/ProductList.scss';
</style>
