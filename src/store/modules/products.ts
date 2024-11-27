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
		categories: [],
		selectedCategoryId: null,
		promotions: [],
		selectedSubCategoryId: null,
	}),
	getters: {
		getProductById: (state) => state.products,
		// getProductsByCategory: (state) => (categoryId: string) => {
		// 	return state.products.filter((product) =>
		// 		product.categories.includes(categoryId)
		// 	);
		// },
		// Get all categories
		vuexMainCategories: (state) => state.categories,
		// Get promotions for display
		getPromotions: (state) => state.promotions,
		// Get subcategories for the selected category
		vuexSubcategories: (state) => {
			return state.selectedCategoryId;
		},
		vuexSubcategoriesIds: (state) => {
			return state.selectedSubCategoryId;
		},
	},
	actions: {
		async fetchProducts({ commit }) {
			try {
				// Simulating an API call to fetch products data from the local JSON
				const response = await getApi('/data/data.json'); // Ensure the path is correct
				console.log(response?.data);

				commit('SET_PRODUCTS', response?.data?.products || []);
				commit('SET_CATEGORIES', response?.data?.categories || []);
				commit('SET_PROMOTIONS', response?.data?.promotionalSpots || []);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		},
		setSelectedCategory({ commit }, category) {
			commit('SET_SELECTED_CATEGORY', category);
		},

		setSelectedSubCategory({ commit }, categoryId) {
			commit('SET_SELECTED_SUBCATEGORY', categoryId);
		},
	},
	mutations: {
		SET_PRODUCTS(state, products: Product[]) {
			state.products = products;
		},
		SET_CATEGORIES(state, categories: Category[]) {
			state.categories = categories;
		},
		// Store fetched promotions in state
		SET_PROMOTIONS(state, promotions: Promotion[]) {
			state.promotions = promotions;
		},
		// Update selected category
		SET_SELECTED_CATEGORY(state, category) {
			state.selectedCategoryId = category.id;
		},
		SET_SELECTED_SUBCATEGORY(state, categoryId) {
			state.selectedSubCategoryId = categoryId;
		},
	},
};

export default products;
