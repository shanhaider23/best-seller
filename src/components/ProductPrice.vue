<template>
	<p class="text-green-500 text-lg font-semibold">{{ price }} DKK</p>
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
