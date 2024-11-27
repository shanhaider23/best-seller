<template>
	<div>
		<ul>
			<div v-for="category in data" :key="category.id">
				<div v-if="category.id === categoriesId">
					<div @click="selectCategory(category.id)">
						<strong>{{ category.name.en }}</strong>
					</div>

					<!-- Display subcategories if available -->
					<ul v-if="category.categories && category.categories.length > 0">
						<li
							v-for="subCategory in category.categories"
							:key="subCategory.id"
						>
							<div @click="selectCategory(subCategory.id)">
								{{ subCategory.name.en }}
							</div>
							<!-- Recursively display subcategories -->
							<ul
								v-if="
									subCategory.categories && subCategory.categories.length > 0
								"
							>
								<li
									v-for="subSubCategory in subCategory.categories"
									:key="subSubCategory.id"
								>
									<div @click="selectCategory(subSubCategory.id)">
										{{ subSubCategory.name.en }}
									</div>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</ul>
	</div>
</template>

<script lang="ts">
	import { mapGetters, mapActions } from 'vuex';

	export default {
		name: 'Sidebar',
		data() {
			return {
				data: null,
			};
		},
		computed: {
			...mapGetters('products', {
				categoriesId: 'vuexSubcategories',
				mainCategories: 'vuexMainCategories',
			}),
		},
		methods: {
			...mapActions('products', {
				selectSubCategoryIdStore: 'setSelectedSubCategory', // Correctly map Vuex action to `selectCategoryInStore`
			}),
			triggerLoad() {
				// Load the main categories from Vuex
				this.data = this.mainCategories.categories;
				//console.log(this.data[0]);
			},

			selectCategory(categoryId: string) {
				// Dispatch category ID to Vuex
				this.selectSubCategoryIdStore(categoryId);
				console.log(`Category selected: ${categoryId}`);
			},
		},
		watch: {
			categoriesId(oldValue, newValue) {
				if (oldValue !== newValue) {
					this.triggerLoad();
				}
			},
		},
	};
</script>

<style scoped>
	.sidebar {
		background-color: #090909;
		padding: 20px;
	}

	.sidebar-link {
		display: block;
		padding: 8px 16px;
		color: black;
		text-decoration: none;
	}

	.sidebar-link:hover {
		background-color: #ddd;
	}
</style>

<!-- <template>
	<header class="header">
		<nav class="nav">
			<ul>
				<h1>Hello</h1>

				{{
					data
				}}
			</ul>
		</nav>
	</header>
</template>

<script lang="ts">
	import { mapGetters } from 'vuex';

	export default {
		name: 'Sidebar',
		data() {
			return {
				data: null,
			};
		},
		computed: {
			...mapGetters('products', {
				categoriesId: 'vuexSubcategories',
				mainCategories: 'vuexMainCategories',
			}),
		},
		methods: {
			triggerLoad() {
				this.data = this.mainCategories.categories;
				console.log(this.data);
			},
		},
		watch: {
			categoriesId(oldValue, newValue) {
				if (oldValue !== newValue) {
					this.triggerLoad();
				}
			},
		},
	};
</script>

<style scoped>
	.sidebar {
		background-color: #090909;
		padding: 20px;
	}

	.sidebar-link {
		display: block;
		padding: 8px 16px;
		color: black;
		text-decoration: none;
	}

	.sidebar-link:hover {
		background-color: #ddd;
	}
</style> -->
