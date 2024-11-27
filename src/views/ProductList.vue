<template>
	<div class="product-list">
		<div v-if="products.length === 0" class="product-list__loading">
			<p>Loading products...</p>
		</div>

		<div class="product-list__grid">
			<!-- Promotional Spots -->
			<div
				v-for="promo in promotions"
				:key="promo.position"
				:class="`product-list__promotion product-list__promotion--${promo.type}`"
			>
				<a :href="promo.link">
					<img
						:src="promo.image.imageUrl"
						:alt="promo.image.alt"
						class="product-list__promotion-image"
					/>
				</a>
			</div>

			<!-- Products -->
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
				promotions: (state: any) => state.products.promotions, // Fetch promotions from Vuex
			}),
			...mapGetters('products', {
				mainCategories: 'vuexMainCategories',
				subCategoriesId: 'vuexSubcategoriesIds',
			}),
			filteredProducts() {
				if (!this.subCategoriesId) {
					return this.products;
				}

				return this.products.filter((product) =>
					product.categories.includes(this.subCategoriesId)
				);
			},
			combinedItems() {
				const combined = [...this.filteredProducts];

				this.promotions.forEach((promotion) => {
					const position = promotion.position - 1;
					if (position >= 0 && position <= combined.length) {
						combined.splice(position, 0, promotion);
					}
				});

				return combined;
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
	@use '../scss/ProductList.scss';
</style>
