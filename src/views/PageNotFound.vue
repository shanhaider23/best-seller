<template>
	<div class="page-not-found">
		<h1 class="page-not-found__title">404</h1>
		<p class="page-not-found__message">
			Oops! The page you're looking for doesn't exist.
		</p>
		<router-link to="/" class="page-not-found__link">
			Return to Home
		</router-link>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'PageNotFound',
	});
</script>

<style scoped lang="scss">
	.page-not-found {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100%;
		text-align: center;
		&__title {
			font-size: 5rem;
			font-weight: bold;
			color: #ff6b6b;
		}

		&__message {
			margin: 1rem 0;
			font-size: 1.5rem;
		}

		&__link {
			text-decoration: none;
			color: #007bff;
			font-weight: bold;
			font-size: 1.2rem;
			margin-top: 1rem;

			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
