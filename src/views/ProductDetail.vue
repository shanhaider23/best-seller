<template>
	<div v-for="product in products" :key="product.id">
		<div v-if="product.id === parseInt(productId)">
			<!-- Product Name -->
			<h1 class="product-detail__title">
				<span class="product-detail__title--en">{{ product.name.dk }}</span>
				<span v-if="product.name.en" class="product-detail__title--en">
					/ {{ product.name.en }}
				</span>
			</h1>

			<!-- Brand -->
			<p class="product-detail__brand"><b>Brand:</b> {{ product.brand }}</p>

			<!-- Product Images -->
			<div class="product-detail__images">
				<ProductImage :src="product.images" />
			</div>

			<p class="product-detail__description">
				{{ product.description || 'No description available' }}
			</p>

			<!-- Price -->
			<p class="product-detail__price"><b>Price:</b> {{ product.price }} DKK</p>

			<!-- Stock -->
			<p class="product-detail__stock">
				<b>Stock:</b> {{ product.stock }} available
			</p>

			<!-- Variants -->
			<div v-if="product.variant?.length" class="product-detail__variants">
				<h3 class="product-detail__variants-title">Variants:</h3>
				<ul class="product-detail__variants-list">
					<li
						v-for="variant in product.variant"
						:key="variant.color"
						class="product-detail__variant"
					>
						<b>Color:</b> {{ variant.color }} | <b>Sizes:</b>
						{{ variant.size.join(', ') }} | <b>Stock:</b> {{ variant.stock }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { mapGetters } from 'vuex';
	import { Product } from '@/types';
	import ProductImage from '../components/ProductImage.vue';

	export default defineComponent({
		name: 'ProductDetail',
		components: {
			ProductImage,
		},
		computed: {
			...mapGetters({
				products: 'products/getProductById',
			}),
			productId() {
				return this.$route.params.id;
			},
		},
		methods: {
			fetchProductIfNeeded() {
				if (!this.product) {
					this.$store.dispatch('products/fetchProducts');
				}
			},
		},
		mounted() {
			this.fetchProductIfNeeded();
		},
	});
</script>

<style scoped lang="scss">
	@import '../scss/ProductDetail.scss';
</style>
