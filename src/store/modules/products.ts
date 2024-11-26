import { Module } from 'vuex';
import { Product } from '@/types';
import { getApi } from './../../api/getApi';

interface ProductsState {
	products: Product[];
}

const products: Module<ProductsState, any> = {
	namespaced: true,
	state: () => ({
		products: [],
	}),
	mutations: {
		SET_PRODUCTS(state, products: Product[]) {
			state.products = products;
		},
	},

	actions: {
		async fetchProducts({ commit }) {
			try {
				// Simulating an API call to fetch products data from the local JSON
				const response = await getApi('/data/data.json'); // Ensure the path is correct
				console.log(response);
				// Check if the response is valid
				if (response && response.data && response.data.products) {
					commit('SET_PRODUCTS', response.data.products); // Store the product data into Vuex
				} else {
					console.error('Invalid response data:', response);
				}
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		},
	},
	getters: {
		getProductById: (state) => (id: number) => {
			return state.products.find((product) => product.id === id);
		},
		getProductsByCategory: (state) => (categoryId: string) => {
			return state.products.filter((product) =>
				product.categories.includes(categoryId)
			);
		},
	},
};

export default products;
