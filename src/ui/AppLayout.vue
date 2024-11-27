<template>
	<div class="app-layout">
		<header class="app-layout__header">
			<Header @toggle-sidebar="toggleSidebar" />
		</header>
		<div class="app-layout__main">
			<aside class="app-layout__sidebar">
				<Sidebar :isVisible="isSidebarVisible" @close-sidebar="closeSidebar" />
			</aside>
			<main class="app-layout__content">
				<router-view />
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
		data() {
			return {
				isSidebarVisible: false,
			};
		},
		methods: {
			toggleSidebar(visibility) {
				this.isSidebarVisible = visibility;
				console.log(this.isSidebarVisible);
			},

			closeSidebar() {
				this.isSidebarVisible = false;
				console.log(this.isSidebarVisible);
			},
		},
	};
</script>

<style lang="scss" scoped>
	@use './AppLayout.scss';
</style>
