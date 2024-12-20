// src/shims-vue.d.ts
import { Store } from 'vuex';
import { State } from './store';

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$store: Store<State>;
	}
}
declare module '*.vue';
