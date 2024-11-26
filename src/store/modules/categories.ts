import { Module } from 'vuex';
import { getApi } from './../../api/getApi';
import { RootState, Category } from '@/types';

const categories: Module<any, RootState> = {
	state: {
		categories: [],
		selectedCategoryId: null,
	},
	getters: {
		// Getter to return all categories
		vuexMainCategories: (state: any) => state.categories,
		// Getter to return subcategories for the selected category
		vuexSubcategories: (state: any) => {
			const selectedCategory = state.categories.find(
				(category: Category) => category.id === state.selectedCategoryId
			);
			return selectedCategory?.categories || [];
		},
	},
	actions: {
		// Action to fetch categories from the API
		async vuexFetchCategories({ commit }: any) {
			try {
				const response = await getApi('/data/data.json'); // Fetch data from the API
				commit('UPDATE_CATEGORIES', response?.data?.categories); // Commit the fetched categories
			} catch (error) {
				console.error('Error fetching categories:', error);
			}
		},
		// Action to select a category
		vuexSelectCategory({ commit }: any, categoryId: string) {
			commit('SET_SELECTED_CATEGORY', categoryId); // Commit the selected category ID
		},
	},
	mutations: {
		// Mutation to update categories in the state
		UPDATE_CATEGORIES(state, categories: Category[]) {
			state.categories = categories;
		},
		// Mutation to set the selected category ID
		SET_SELECTED_CATEGORY(state, categoryId: string) {
			state.selectedCategoryId = categoryId;
		},
	},
};

export default categories;
