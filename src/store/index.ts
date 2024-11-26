import { createStore } from 'vuex';
import products from './modules/products';
import categories from './modules/categories';
import promotions from './modules/promotions';

const store = createStore({
	modules: {
		products,
		categories,
		promotions,
	},
});

export default store;
