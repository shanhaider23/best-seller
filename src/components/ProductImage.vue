<template>
	<div class="product-image-carousel relative">
		<div v-if="images.length > 0" class="carousel">
			<div
				v-for="(image, index) in images"
				:key="index"
				:class="['carousel-item', { active: index === currentImage }]"
			>
				<img
					:src="image"
					alt="Product Image"
					class="object-cover w-full h-full rounded-lg"
				/>
			</div>
			<button class="prev-button" @click="prevImage">❮</button>
			<button class="next-button" @click="nextImage">❯</button>
		</div>
		<div v-else class="no-image">
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

<style scoped>
	.product-image-carousel {
		position: relative;
		width: 100%;
		height: 300px; /* Adjust based on your design */
		overflow: hidden;
	}

	.carousel {
		display: flex;
		position: relative;
	}

	.carousel-item {
		display: none;
		flex-shrink: 0;
		width: 100%;
		height: 100%;
		transition: opacity 0.3s ease-in-out;
	}

	.carousel-item.active {
		display: block;
	}

	button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(0, 0, 0, 0.5);
		color: white;
		border: none;
		cursor: pointer;
		z-index: 10;
	}

	.prev-button {
		left: 10px;
	}

	.next-button {
		right: 10px;
	}

	.no-image {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		color: gray;
	}
</style>
