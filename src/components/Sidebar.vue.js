import { mapGetters, mapActions } from 'vuex';
export default (await import('vue')).defineComponent({
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
    computed: Object.assign({}, mapGetters('products', {
        categoriesId: 'vuexSubcategories',
        mainCategories: 'vuexMainCategories',
    })),
    methods: Object.assign(Object.assign({}, mapActions('products', {
        selectSubCategoryIdStore: 'setSelectedSubCategory',
    })), { triggerData() {
            this.data = this.mainCategories.categories;
        },
        selectCategory(categoryId) {
            this.selectSubCategoryIdStore(categoryId);
            console.log(`Category selected: ${categoryId}`);
        },
        closeSidebar() {
            this.$emit('close-sidebar');
        } }),
    watch: {
        categoriesId(oldValue, newValue) {
            if (oldValue !== newValue) {
                this.triggerData();
            }
        },
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
    if (__VLS_ctx.isVisible) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("sidebar") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("sidebar__content") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(Object.assign({ class: ("sidebar__list") }));
        for (const [category] of __VLS_getVForSourceType((__VLS_ctx.data))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((category.id)), });
            if (category.id === __VLS_ctx.categoriesId) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.isVisible)))
                            return;
                        if (!((category.id === __VLS_ctx.categoriesId)))
                            return;
                        __VLS_ctx.selectCategory(category.id);
                    } }, { class: ("sidebar__item") }));
                __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
                (category.name.en);
                if (category.categories && category.categories.length > 0) {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(Object.assign({ class: ("sidebar__sublist") }));
                    for (const [subCategory] of __VLS_getVForSourceType((category.categories))) {
                        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((subCategory.id)), });
                        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (...[$event]) => {
                                if (!((__VLS_ctx.isVisible)))
                                    return;
                                if (!((category.id === __VLS_ctx.categoriesId)))
                                    return;
                                if (!((category.categories && category.categories.length > 0)))
                                    return;
                                __VLS_ctx.selectCategory(subCategory.id);
                            } }, { class: ("sidebar__subitem") }));
                        (subCategory.name.en);
                        if (subCategory.categories && subCategory.categories.length > 0) {
                            __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(Object.assign({ class: ("sidebar__subsublist") }));
                            for (const [subSubCategory] of __VLS_getVForSourceType((subCategory.categories))) {
                                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((subSubCategory.id)), });
                                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (...[$event]) => {
                                        if (!((__VLS_ctx.isVisible)))
                                            return;
                                        if (!((category.id === __VLS_ctx.categoriesId)))
                                            return;
                                        if (!((category.categories && category.categories.length > 0)))
                                            return;
                                        if (!((subCategory.categories && subCategory.categories.length > 0)))
                                            return;
                                        __VLS_ctx.selectCategory(subSubCategory.id);
                                    } }, { class: ("sidebar__subsubitem") }));
                                (subSubCategory.name.en);
                            }
                        }
                    }
                }
            }
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("sidebar__close-btn") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign({ onClick: (__VLS_ctx.closeSidebar) }));
    }
    __VLS_styleScopedClasses['sidebar'];
    __VLS_styleScopedClasses['sidebar__content'];
    __VLS_styleScopedClasses['sidebar__list'];
    __VLS_styleScopedClasses['sidebar__item'];
    __VLS_styleScopedClasses['sidebar__sublist'];
    __VLS_styleScopedClasses['sidebar__subitem'];
    __VLS_styleScopedClasses['sidebar__subsublist'];
    __VLS_styleScopedClasses['sidebar__subsubitem'];
    __VLS_styleScopedClasses['sidebar__close-btn'];
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
