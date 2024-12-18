<template>
	<div v-if="isVisible" class="sidebar">
		<div class="sidebar__content">
			<ul class="sidebar__list">
				<div v-for="category in data" :key="category.id">
					<div v-if="category.id === categoriesId">
						<div @click="selectCategory(category.id)" class="sidebar__item">
							<strong>{{ category.name.en }}</strong>
						</div>

						<ul
							v-if="category.categories && category.categories.length > 0"
							class="sidebar__sublist"
						>
							<li
								v-for="subCategory in category.categories"
								:key="subCategory.id"
							>
								<div
									@click="selectCategory(subCategory.id)"
									class="sidebar__subitem"
								>
									{{ subCategory.name.en }}
								</div>

								<ul
									v-if="
										subCategory.categories && subCategory.categories.length > 0
									"
									class="sidebar__subsublist"
								>
									<li
										v-for="subSubCategory in subCategory.categories"
										:key="subSubCategory.id"
									>
										<div
											@click="selectCategory(subSubCategory.id)"
											class="sidebar__subsubitem"
										>
											{{ subSubCategory.name.en }}
										</div>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</ul>
			<div class="sidebar__close-btn">
				<button @click="closeSidebar">X</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { mapGetters, mapActions } from 'vuex';

	export default {
		name: 'Sidebar',
		props: {
			isVisible: {
				type: Boolean,
				required: true,
			},
		},
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
				selectSubCategoryIdStore: 'setSelectedSubCategory',
			}),
			triggerData() {
				this.data = this.mainCategories.categories;
			},

			selectCategory(categoryId: string) {
				this.selectSubCategoryIdStore(categoryId);
				console.log(`Category selected: ${categoryId}`);
			},
			closeSidebar() {
				this.$emit('close-sidebar');
			},
		},
		watch: {
			categoriesId(oldValue, newValue) {
				if (oldValue !== newValue) {
					this.triggerData();
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import '../scss/Sidebar.scss';
</style>
