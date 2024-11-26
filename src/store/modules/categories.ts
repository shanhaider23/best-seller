import { Module } from 'vuex';
import { Category } from '@/types';
import { getApi } from './../../api/getApi';

interface CategoriesState {
	categories: Category[];
}

const categories: Module<CategoriesState, any> = {
	namespaced: true,
	state: () => ({
		categories: [],
	}),
	mutations: {
		SET_CATEGORIES(state, categories: Category[]) {
			state.categories = categories;
		},
	},
	actions: {
		async fetchCategories({ commit }) {
			const data = await getApi('/api/categories'); // Your API endpoint
			if (data) {
				commit('SET_CATEGORIES', data.data); // Assuming data is in 'data' property
			}
		},
	},
	getters: {
		getCategoryById: (state) => (id: string) => {
			return state.categories.find((category) => category.id === id);
		},
	},
};

export default categories;
