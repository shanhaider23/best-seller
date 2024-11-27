var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getApi } from './../../api/getApi';
const products = {
    namespaced: true,
    state: () => ({
        products: [],
        categories: [],
        promotions: [],
        selectedCategoryId: null,
        selectedSubCategoryId: null,
    }),
    getters: {
        getProductById: (state) => state.products,
        vuexMainCategories: (state) => state.categories,
        getPromotions: (state) => state.promotions,
        vuexSubcategories: (state) => state.selectedCategoryId,
        vuexSubcategoriesIds: (state) => state.selectedSubCategoryId,
    },
    actions: {
        fetchProducts(_a) {
            return __awaiter(this, arguments, void 0, function* ({ commit }) {
                var _b, _c, _d;
                try {
                    const response = yield getApi('/data/data.json');
                    commit('SET_PRODUCTS', ((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.products) || []);
                    commit('SET_CATEGORIES', ((_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.categories) || []);
                    commit('SET_PROMOTIONS', ((_d = response === null || response === void 0 ? void 0 : response.data) === null || _d === void 0 ? void 0 : _d.promotionalSpots) || []);
                }
                catch (error) {
                    console.error('Error fetching products:', error);
                }
            });
        },
        setSelectedCategory({ commit }, category) {
            commit('SET_SELECTED_CATEGORY', category);
        },
        setSelectedSubCategory({ commit }, categoryId) {
            commit('SET_SELECTED_SUBCATEGORY', categoryId);
        },
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        SET_CATEGORIES(state, categories) {
            state.categories = categories;
        },
        SET_PROMOTIONS(state, promotions) {
            state.promotions = promotions;
        },
        SET_SELECTED_CATEGORY(state, category) {
            state.selectedCategoryId = category.id;
        },
        SET_SELECTED_SUBCATEGORY(state, categoryId) {
            state.selectedSubCategoryId = categoryId;
        },
    },
};
export default products;
