<template>
	<div v-for="product in products" :key="product.id">
		<div v-if="product.id === parseInt(productId)">
			<!-- Product Name -->
			<h1 class="text-3xl font-bold">
				<span>{{ product.name.dk }}</span>
				<span v-if="product.name.en" class="text-gray-500"
					>/ {{ product.name.en }}</span
				>
			</h1>
			<!-- Brand -->
			<p class="mt-2 text-lg text-gray-600">
				<b>Brand:</b> {{ product.brand }}
			</p>
			<!-- Product Images -->
			<div class="mt-4"><ProductImage :src="product.images" /></div>
			<p class="mt-4">
				{{ product.description || 'No description available' }}
			</p>
			<!-- Price -->
			<p class="mt-4 text-green-600 text-xl font-semibold">
				<b>Price:</b> {{ product.price }} DKK
			</p>

			<!-- Stock -->
			<p class="mt-2 text-gray-700">
				<b>Stock:</b> {{ product.stock }} available
			</p>

			<!-- Variants -->
			<div v-if="product.variant?.length" class="mt-6">
				<h3 class="font-semibold text-lg">Variants:</h3>
				<ul class="list-disc ml-4">
					<li
						v-for="variant in product.variant"
						:key="variant.color"
						class="mt-1 text-gray-700"
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
	import products from '../store/modules/products';
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

<style scoped>
	/* Optional: Add additional styles */
</style>
