<template>
	<div class="border rounded-lg p-4 hover:shadow-lg">
		<ProductImage :src="product?.images[0]" />
		<h3 class="font-bold text-xl mt-2">{{ product.name.en }}</h3>
		<ProductPrice :price="product.price" />
		<router-link :to="`/product/${product.id}`" class="text-blue-500"
			>View Details</router-link
		>
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
