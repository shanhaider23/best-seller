import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '@/views/ProductList.vue';
import ProductDetail from '@/views/ProductDetail.vue';

const routes = [
	{
		path: '/',
		name: 'ProductList',
		component: ProductList, // The main product listing page
	},
	{
		path: '/product/:id', // Dynamic route for the product detail page
		name: 'ProductDetail',
		component: ProductDetail,
		props: true, // Allows the use of route params as props
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes, // Define the routes for the application
});

export default router;
