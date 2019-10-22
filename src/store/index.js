import Vue from 'vue';
import Vuex from 'vuex';
import alerts from './alerts';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        alerts,
    },
});
