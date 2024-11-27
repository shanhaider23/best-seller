import { defineComponent, ref, computed } from 'vue';
export default defineComponent({
    name: 'ProductImage',
    props: {
        src: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const currentImage = ref(0);
        const images = computed(() => props.src || []);
        const nextImage = () => {
            currentImage.value = (currentImage.value + 1) % images.value.length;
        };
        const prevImage = () => {
            currentImage.value =
                (currentImage.value - 1 + images.value.length) % images.value.length;
        };
        return {
            images,
            currentImage,
            nextImage,
            prevImage,
        };
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("product-image-carousel") }));
    if (__VLS_ctx.images.length > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("product-image-carousel__carousel") }));
        for (const [image, index] of __VLS_getVForSourceType((__VLS_ctx.images))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ key: ((index)) }, { class: (([
                    'product-image-carousel__carousel-item',
                    {
                        'product-image-carousel__carousel-item--active': index === __VLS_ctx.currentImage,
                    },
                ])) }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign({ src: ((image)), alt: ("Product Image") }, { class: ("product-image-carousel__image") }));
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign({ onClick: (__VLS_ctx.prevImage) }, { class: ("product-image-carousel__prev-button") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign({ onClick: (__VLS_ctx.nextImage) }, { class: ("product-image-carousel__next-button") }));
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("product-image-carousel__no-image") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    __VLS_styleScopedClasses['product-image-carousel'];
    __VLS_styleScopedClasses['product-image-carousel__carousel'];
    __VLS_styleScopedClasses['product-image-carousel__carousel-item'];
    __VLS_styleScopedClasses['product-image-carousel__carousel-item--active'];
    __VLS_styleScopedClasses['product-image-carousel__image'];
    __VLS_styleScopedClasses['product-image-carousel__prev-button'];
    __VLS_styleScopedClasses['product-image-carousel__next-button'];
    __VLS_styleScopedClasses['product-image-carousel__no-image'];
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
