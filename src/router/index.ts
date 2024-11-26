import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AppLayout from '../ui/AppLayout.vue';
import ProductList from '@/views/ProductList.vue';
import ProductDetail from '@/views/ProductDetail.vue';
// import PageNotFound from '@/views/PageNotFound.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: AppLayout, // AppLayout wraps all of the following routes
		children: [
			{
				path: '',
				redirect: '/products', // Redirect to products page
			},
			{
				path: 'products',
				name: 'ProductList',
				component: ProductList,
			},
			{
				path: 'product/:id',
				name: 'ProductDetail',
				component: ProductDetail,
				props: true, // Pass route params as props
			},
		],
	},

	// {
	// 	path: '/:pathMatch(.*)*', // Catch-all route for 404
	// 	name: 'PageNotFound',
	// 	component: PageNotFound,
	// },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
