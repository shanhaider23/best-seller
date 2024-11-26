<template>
	<aside class="sidebar">
		<h3>Subcategories</h3>
		<ul>
			<li v-for="subcategory in subcategories" :key="subcategory.id">
				<router-link :to="`/category/${subcategory.id}`" class="sidebar-link">
					{{ subcategory.name.en || subcategory.name.dk }}
				</router-link>
			</li>
		</ul>
	</aside>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { mapGetters } from 'vuex';

	export default defineComponent({
		name: 'Sidebar',
		computed: {
			...mapGetters({
				vuexMainCategories: 'vuexMainCategories', // Directly access getter without namespace
			}),
		},
	});
</script>

<style scoped>
	.sidebar {
		background-color: #34495e;
		color: white;
		padding: 20px;
		width: 250px;
	}

	h3 {
		margin-bottom: 20px;
		font-size: 18px;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	.sidebar-link {
		display: block;
		padding: 8px 16px;
		color: white;
		text-decoration: none;
	}

	.sidebar-link:hover {
		background-color: #2c3e50;
	}
</style>
