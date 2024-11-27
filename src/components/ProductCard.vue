<template>
	<div class="product-card">
		<ProductImage :src="product.images" class="product-card__image" />
		<h3 class="product-card__title">
			{{ product.name.en || product.name.dk }}
		</h3>
		<ProductPrice :price="product.price" class="product-card__price" />
		<router-link :to="`/product/${product.id}`" class="product-card__link">
			View Details
		</router-link>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import ProductImage from './ProductImage.vue';
	import ProductPrice from './ProductPrice.vue';
	import { Product } from '@/types';

	export default defineComponent({
		name: 'ProductCard',
		components: {
			ProductImage,
			ProductPrice,
		},
		props: {
			product: {
				type: Object as () => Product,
				required: true,
			},
		},
	});
</script>

<style scoped lang="scss">
	@import '../scss/ProductCard.scss';
</style>
