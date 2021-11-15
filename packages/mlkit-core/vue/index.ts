export default {
    install(Vue) {
        Vue.registerElement('MLKitView', () => require('../').MLKitView);
    },
};