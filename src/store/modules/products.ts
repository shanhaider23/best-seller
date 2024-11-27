import { Module } from 'vuex';
import { Product, Category, PromotionSpot } from '@/types';
import { getApi } from './../../api/getApi';

interface ProductsState {
	products: Product[];
	categories: Category[];
	promotions: PromotionSpot[];
	selectedCategoryId: string | null;
	selectedSubCategoryId: string | null;
}

const products: Module<ProductsState, any> = {
	namespaced: true,
	state: (): ProductsState => ({
		products: [],
		categories: [],
		promotions: [],
		selectedCategoryId: null,
		selectedSubCategoryId: null,
	}),
	getters: {
		getProductById: (state: ProductsState): Product[] => state.products,

		vuexMainCategories: (state: ProductsState): Category[] => state.categories,

		getPromotions: (state: ProductsState): PromotionSpot[] => state.promotions,

		vuexSubcategories: (state: ProductsState): string | null =>
			state.selectedCategoryId,

		vuexSubcategoriesIds: (state: ProductsState): string | null =>
			state.selectedSubCategoryId,
	},
	actions: {
		async fetchProducts({ commit }: { commit: Function }) {
			try {
				const response = await getApi('/data/data.json');
				commit('SET_PRODUCTS', response?.data?.products || []);
				commit('SET_CATEGORIES', response?.data?.categories || []);
				commit('SET_PROMOTIONS', response?.data?.promotionalSpots || []);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		},
		setSelectedCategory(
			{ commit }: { commit: Function },
			category: { id: string }
		) {
			commit('SET_SELECTED_CATEGORY', category);
		},

		setSelectedSubCategory(
			{ commit }: { commit: Function },
			categoryId: string
		) {
			commit('SET_SELECTED_SUBCATEGORY', categoryId);
		},
	},
	mutations: {
		SET_PRODUCTS(state: ProductsState, products: Product[]) {
			state.products = products;
		},
		SET_CATEGORIES(state: ProductsState, categories: Category[]) {
			state.categories = categories;
		},
		SET_PROMOTIONS(state: ProductsState, promotions: PromotionSpot[]) {
			state.promotions = promotions;
		},
		SET_SELECTED_CATEGORY(state: ProductsState, category: { id: string }) {
			state.selectedCategoryId = category.id;
		},
		SET_SELECTED_SUBCATEGORY(state: ProductsState, categoryId: string) {
			state.selectedSubCategoryId = categoryId;
		},
	},
};

export default products;
