import { defineComponent } from 'vue';
import { mapState, mapGetters } from 'vuex';
import ProductCard from '../components/ProductCard.vue';
export default defineComponent({
    name: 'ProductList',
    components: {
        ProductCard,
    },
    computed: Object.assign(Object.assign(Object.assign({}, mapState({
        products: (state) => state.products.products,
        promotions: (state) => state.products.promotions, // Fetch promotions from Vuex
    })), mapGetters('products', {
        mainCategories: 'vuexMainCategories',
        subCategoriesId: 'vuexSubcategoriesIds',
    })), { filteredProducts() {
            if (!this.subCategoriesId) {
                return this.products;
            }
            return this.products.filter((product) => product.categories.includes(this.subCategoriesId));
        },
        combinedItems() {
            const combined = [...this.filteredProducts];
            this.promotions.forEach((promotion) => {
                const position = promotion.position - 1;
                if (position >= 0 && position <= combined.length) {
                    combined.splice(position, 0, promotion);
                }
            });
            return combined;
        } }),
    methods: {
        fetchProductsIfNeeded() {
            if (this.products.length === 0) {
                this.$store.dispatch('products/fetchProducts');
            }
        },
    },
    mounted() {
        this.fetchProductsIfNeeded();
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = Object.assign(Object.assign(Object.assign({
        ProductCard,
    }, {}), {}), __VLS_ctx);
    let __VLS_components;
    const __VLS_localDirectives = Object.assign(Object.assign({}, {}), __VLS_ctx);
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("product-list") }));
    if (__VLS_ctx.products.length === 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("product-list__loading") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("product-list__grid") }));
    for (const [promo] of __VLS_getVForSourceType((__VLS_ctx.promotions))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ key: ((promo.position)) }, { class: ((`product-list__promotion product-list__promotion--${promo.type}`)) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((promo.link)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign({ src: ((promo.image.imageUrl)), alt: ((promo.image.alt)) }, { class: ("product-list__promotion-image") }));
    }
    for (const [product] of __VLS_getVForSourceType((__VLS_ctx.filteredProducts))) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ProductCard;
        /** @type { [typeof __VLS_components.ProductCard, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ key: ((product.id)), product: ((product)) }, { class: ("product-list__card") })));
        const __VLS_2 = __VLS_1(Object.assign({ key: ((product.id)), product: ((product)) }, { class: ("product-list__card") }), ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    __VLS_styleScopedClasses['product-list'];
    __VLS_styleScopedClasses['product-list__loading'];
    __VLS_styleScopedClasses['product-list__grid'];
    __VLS_styleScopedClasses['product-list__promotion-image'];
    __VLS_styleScopedClasses['product-list__card'];
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
