<template>
	<p class="product-price">{{ price }} DKK</p>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';

	export default defineComponent({
		name: 'ProductPrice',
		props: {
			price: {
				type: Number,
				required: true,
			},
		},
	});
</script>

<style scoped lang="scss">
	@import '../scss/ProductPrice.scss';
</style>
