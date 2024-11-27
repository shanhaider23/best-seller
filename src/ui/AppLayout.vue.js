import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
export default (await import('vue')).defineComponent({
    name: 'AppLayout',
    components: {
        Header,
        Sidebar,
    },
    data() {
        return {
            isSidebarVisible: false,
        };
    },
    methods: {
        toggleSidebar(visibility) {
            this.isSidebarVisible = visibility;
        },
        closeSidebar() {
            this.isSidebarVisible = false;
        },
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = Object.assign(Object.assign(Object.assign({
        Header,
        Sidebar,
    }, {}), {}), __VLS_ctx);
    let __VLS_components;
    const __VLS_localDirectives = Object.assign(Object.assign({}, {}), __VLS_ctx);
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("app-layout") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)(Object.assign({ class: ("app-layout__header") }));
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Header;
    /** @type { [typeof __VLS_components.Header, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ 'onToggleSidebar': {} })));
    const __VLS_2 = __VLS_1(Object.assign({ 'onToggleSidebar': {} }), ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onToggleSidebar: (__VLS_ctx.toggleSidebar)
    };
    let __VLS_3;
    let __VLS_4;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("app-layout__main") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.aside, __VLS_intrinsicElements.aside)(Object.assign({ class: ("app-layout__sidebar") }));
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.Sidebar;
    /** @type { [typeof __VLS_components.Sidebar, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(Object.assign({ 'onCloseSidebar': {} }, { isVisible: ((__VLS_ctx.isSidebarVisible)) })));
    const __VLS_10 = __VLS_9(Object.assign({ 'onCloseSidebar': {} }, { isVisible: ((__VLS_ctx.isSidebarVisible)) }), ...__VLS_functionalComponentArgsRest(__VLS_9));
    let __VLS_14;
    const __VLS_15 = {
        onCloseSidebar: (__VLS_ctx.closeSidebar)
    };
    let __VLS_11;
    let __VLS_12;
    var __VLS_13;
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)(Object.assign({ class: ("app-layout__content") }));
    const __VLS_16 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({}));
    const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
    __VLS_styleScopedClasses['app-layout'];
    __VLS_styleScopedClasses['app-layout__header'];
    __VLS_styleScopedClasses['app-layout__main'];
    __VLS_styleScopedClasses['app-layout__sidebar'];
    __VLS_styleScopedClasses['app-layout__content'];
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
