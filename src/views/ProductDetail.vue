<template>
	<div v-if="product">
		<h1 class="text-3xl font-bold">{{ product.name.en }}</h1>
		<div class="mt-4">
			<img
				:src="product.images[0]"
				alt="Product Image"
				class="w-64 h-64 object-cover rounded-md"
			/>
		</div>
		<p class="mt-4">{{ product.description }}</p>
		<p class="mt-2 text-green-500 text-lg font-semibold">
			{{ product.price }} DKK
		</p>

		<!-- Show product variants if available -->
		<div v-if="product.variant?.length" class="mt-4">
			<h3 class="font-semibold">Variants:</h3>
			<ul>
				<li v-for="variant in product.variant" :key="variant.color">
					{{ variant.color }} - {{ variant.size.join(', ') }}
				</li>
			</ul>
		</div>
	</div>

	<div v-else>
		<p>Loading product details...</p>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { mapGetters } from 'vuex';
	import { Product } from '@/types';

	export default defineComponent({
		name: 'ProductDetail',
		computed: {
			// Retrieve product by ID from Vuex store using the route params
			...mapGetters({
				product: 'products/getProductById',
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
