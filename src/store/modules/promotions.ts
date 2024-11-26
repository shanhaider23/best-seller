import { getApi } from './../../api/getApi';
import { Module } from 'vuex';
import { PromotionSpot } from '@/types';

interface PromotionsState {
	promotionalSpots: PromotionSpot[];
}

const promotions: Module<PromotionsState, any> = {
	namespaced: true,
	state: () => ({
		promotionalSpots: [],
	}),
	mutations: {
		SET_PROMOTIONS(state, spots: PromotionSpot[]) {
			state.promotionalSpots = spots;
		},
	},
	actions: {
		async fetchPromotions({ commit }) {
			const data = await getApi('/api/promotions'); // Your API endpoint
			if (data) {
				commit('SET_PROMOTIONS', data.data); // Assuming data is in 'data' property
			}
		},
	},
};

export default promotions;
