<template>
	<img
		:src="src"
		alt="Product Image"
		class="w-full h-32 object-cover rounded-md"
	/>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';

	export default defineComponent({
		name: 'ProductImage',
		props: {
			src: {
				type: String,
				required: true,
			},
		},
	});
</script>
