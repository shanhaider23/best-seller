<template>
	<div class="app-layout">
		<Header />
		<div class="main-content">
			<Sidebar />
			<main class="content-area">
				<router-view />
				<!-- This will render the matched route's component -->
			</main>
		</div>
	</div>
</template>

<script>
	import Header from '@/components/Header.vue';
	import Sidebar from '@/components/Sidebar.vue';

	export default {
		name: 'AppLayout',
		components: {
			Header,
			Sidebar,
		},
	};
</script>

<style scoped>
	/* Add your styles here */
	.app-layout {
		display: flex;
		flex-direction: column;
	}

	.main-content {
		display: flex;
	}

	.content-area {
		flex-grow: 1;
		padding: 20px;
	}
</style>
