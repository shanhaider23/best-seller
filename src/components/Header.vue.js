var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
export default defineComponent({
    name: 'Header',
    data() {
        return {
            allCategories: [],
        };
    },
    computed: Object.assign({ filteredCategories() {
            return this.allCategories;
        } }, mapGetters('products', {
        categoriesId: 'vuexSubcategories',
    })),
    methods: Object.assign(Object.assign({}, mapActions('products', {
        fetchCategoriesFromStore: 'fetchProducts',
        selectCategoryInStore: 'setSelectedCategory',
    })), { fetchCategories() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield this.fetchCategoriesFromStore();
                    const rootCategory = this.$store.state.products.categories;
                    if (rootCategory &&
                        rootCategory.categories &&
                        Array.isArray(rootCategory.categories)) {
                        this.allCategories = rootCategory.categories;
                    }
                    else {
                        console.error('Invalid rootCategory structure:', rootCategory);
                    }
                }
                catch (error) {
                    console.error('Error fetching categories:', error);
                }
            });
        },
        selectCategory(category) {
            this.selectCategoryInStore(category);
            this.$emit('toggle-sidebar', true);
        } }),
    mounted() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fetchCategories(); // Fetch categories on mount
        });
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = Object.assign(Object.assign(Object.assign({}, {}), {}), __VLS_ctx);
    let __VLS_components;
    const __VLS_localDirectives = Object.assign(Object.assign({}, {}), __VLS_ctx);
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)(Object.assign({ class: ("header") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("header__logo") }));
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), }));
    const __VLS_2 = __VLS_1({ to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign({ src: ("../assets/logo.jpg"), alt: ("Product Image") }, { class: ("header__logo-image") }));
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)(Object.assign({ class: ("header__nav") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(Object.assign({ class: ("header__nav-list") }));
    for (const [category] of __VLS_getVForSourceType((__VLS_ctx.filteredCategories))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(Object.assign({ class: ("header__nav-item") }, { key: ((category.id)) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign({ onClick: (...[$event]) => {
                __VLS_ctx.selectCategory(category);
            } }, { class: ("header__nav-link") }));
        (category.name.en || category.name.dk);
    }
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['header__logo'];
    __VLS_styleScopedClasses['header__logo-image'];
    __VLS_styleScopedClasses['header__nav'];
    __VLS_styleScopedClasses['header__nav-list'];
    __VLS_styleScopedClasses['header__nav-item'];
    __VLS_styleScopedClasses['header__nav-link'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
