import { defineComponent } from 'vue';
import ProductImage from './ProductImage.vue';
import ProductPrice from './ProductPrice.vue';
export default defineComponent({
    name: 'ProductCard',
    components: {
        ProductImage,
        ProductPrice,
    },
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = Object.assign(Object.assign(Object.assign({
        ProductImage,
        ProductPrice,
    }, {}), {}), __VLS_ctx);
    let __VLS_components;
    const __VLS_localDirectives = Object.assign(Object.assign({}, {}), __VLS_ctx);
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("product-card") }));
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ProductImage;
    /** @type { [typeof __VLS_components.ProductImage, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ src: ((__VLS_ctx.product.images)) }, { class: ("product-card__image") })));
    const __VLS_2 = __VLS_1(Object.assign({ src: ((__VLS_ctx.product.images)) }, { class: ("product-card__image") }), ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(Object.assign({ class: ("product-card__title") }));
    (__VLS_ctx.product.name.en || __VLS_ctx.product.name.dk);
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ProductPrice;
    /** @type { [typeof __VLS_components.ProductPrice, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6(Object.assign({ price: ((__VLS_ctx.product.price)) }, { class: ("product-card__price") })));
    const __VLS_8 = __VLS_7(Object.assign({ price: ((__VLS_ctx.product.price)) }, { class: ("product-card__price") }), ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(Object.assign({ to: ((`/product/${__VLS_ctx.product.id}`)) }, { class: ("product-card__link") })));
    const __VLS_14 = __VLS_13(Object.assign({ to: ((`/product/${__VLS_ctx.product.id}`)) }, { class: ("product-card__link") }), ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17;
    __VLS_styleScopedClasses['product-card'];
    __VLS_styleScopedClasses['product-card__image'];
    __VLS_styleScopedClasses['product-card__title'];
    __VLS_styleScopedClasses['product-card__price'];
    __VLS_styleScopedClasses['product-card__link'];
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
