<template>
	<div>
		<h1>Hello</h1>
		<router-link :to="`/product/2`" class="text-blue-500">
			View Details
		</router-link>
	</div>
</template>

<script lang="ts">
	// import { defineComponent } from 'vue';
	// import { mapGetters } from 'vuex';
	// import { Product } from '@/types';

	// export default defineComponent({
	// 	name: 'ProductDetail',
	// 	computed: {
	// 		...mapGetters({
	// 			product: 'products/getProductById',
	// 		}),
	// 		productId() {
	// 			return this.$route.params.id;
	// 		},
	// 	},
	// 	methods: {
	// 		fetchProductIfNeeded() {
	// 			if (!this.product) {
	// 				this.$store.dispatch('products/fetchProducts');
	// 			}
	// 		},
	// 	},
	// 	mounted() {
	// 		this.fetchProductIfNeeded();
	// 	},
	// });
</script>

<style scoped>
	/* Optional: Add additional styles */
</style>
