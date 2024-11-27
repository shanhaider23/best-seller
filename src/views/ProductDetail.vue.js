import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import ProductImage from '../components/ProductImage.vue';
export default defineComponent({
    name: 'ProductDetail',
    components: {
        ProductImage,
    },
    computed: Object.assign(Object.assign({}, mapGetters({
        products: 'products/getProductById',
    })), { productId() {
            return this.$route.params.id;
        } }),
    methods: {
        fetchProductIfNeeded() {
            if (!this.products.length) {
                this.$store.dispatch('products/fetchProducts');
            }
        },
    },
    mounted() {
        this.fetchProductIfNeeded();
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    var _a;
    const __VLS_ctx = {};
    const __VLS_localComponents = Object.assign(Object.assign(Object.assign({
        ProductImage,
    }, {}), {}), __VLS_ctx);
    let __VLS_components;
    const __VLS_localDirectives = Object.assign(Object.assign({}, {}), __VLS_ctx);
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    for (const [product] of __VLS_getVForSourceType((__VLS_ctx.products))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((product.id)), });
        if (product.id === parseInt(__VLS_ctx.productId)) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("product-detail__images") }));
            const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ProductImage;
            /** @type { [typeof __VLS_components.ProductImage, ] } */
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ src: ((product.images)), }));
            const __VLS_2 = __VLS_1({ src: ((product.images)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(Object.assign({ class: ("product-detail__title") }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("product-detail__title--dk") }));
            (product.name.dk);
            if (product.name.dk && product.name.en) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("product-detail__title--en") }));
                (product.name.en);
            }
            else if (!product.name.dk && product.name.en) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("product-detail__title--en") }));
                (product.name.en);
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: ("product-detail__brand") }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
            (product.brand);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: ("product-detail__description") }));
            (product.description || 'No description available');
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: ("product-detail__price") }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
            (product.price);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: ("product-detail__stock") }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
            (product.stock);
            if ((_a = product.variant) === null || _a === void 0 ? void 0 : _a.length) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("product-detail__variants") }));
                __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(Object.assign({ class: ("product-detail__variants-title") }));
                __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(Object.assign({ class: ("product-detail__variants-list") }));
                for (const [variant] of __VLS_getVForSourceType((product.variant))) {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(Object.assign({ key: ((variant.color)) }, { class: ("product-detail__variant") }));
                    __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
                    (variant.color);
                    __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
                    (variant.size.join(', '));
                    __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
                    (variant.stock);
                }
            }
        }
    }
    __VLS_styleScopedClasses['product-detail__images'];
    __VLS_styleScopedClasses['product-detail__title'];
    __VLS_styleScopedClasses['product-detail__title--dk'];
    __VLS_styleScopedClasses['product-detail__title--en'];
    __VLS_styleScopedClasses['product-detail__title--en'];
    __VLS_styleScopedClasses['product-detail__brand'];
    __VLS_styleScopedClasses['product-detail__description'];
    __VLS_styleScopedClasses['product-detail__price'];
    __VLS_styleScopedClasses['product-detail__stock'];
    __VLS_styleScopedClasses['product-detail__variants'];
    __VLS_styleScopedClasses['product-detail__variants-title'];
    __VLS_styleScopedClasses['product-detail__variants-list'];
    __VLS_styleScopedClasses['product-detail__variant'];
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
