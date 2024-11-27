<template>
	<div class="product-image-carousel">
		<div v-if="images.length > 0" class="product-image-carousel__carousel">
			<div
				v-for="(image, index) in images"
				:key="index"
				:class="[
					'product-image-carousel__carousel-item',
					{
						'product-image-carousel__carousel-item--active':
							index === currentImage,
					},
				]"
			>
				<img
					:src="image"
					alt="Product Image"
					class="product-image-carousel__image"
				/>
			</div>
			<button class="product-image-carousel__prev-button" @click="prevImage">
				❮
			</button>
			<button class="product-image-carousel__next-button" @click="nextImage">
				❯
			</button>
		</div>
		<div v-else class="product-image-carousel__no-image">
			<p>No images available</p>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, computed } from 'vue';

	export default defineComponent({
		name: 'ProductImage',
		props: {
			src: {
				type: Array as () => string[],
				required: true,
			},
		},
		setup(props) {
			const currentImage = ref(0);

			const images = computed(() => props.src || []);

			const nextImage = () => {
				currentImage.value = (currentImage.value + 1) % images.value.length;
			};

			const prevImage = () => {
				currentImage.value =
					(currentImage.value - 1 + images.value.length) % images.value.length;
			};

			return {
				images,
				currentImage,
				nextImage,
				prevImage,
			};
		},
	});
</script>

<style scoped lang="scss">
	@use '../scss/productImage.scss';
</style>
