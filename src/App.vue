<template>
	<div>
		<header class="bg-gray-800 text-white p-4">
			<h1 class="text-2xl font-bold">My Product Store</h1>
		</header>

		<!-- Main content rendered based on the current route -->
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'App',
	};
</script>

<style scoped>
	/* Optional: Add some global styles */
</style>
