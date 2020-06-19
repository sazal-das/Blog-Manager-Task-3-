import Vue from 'vue';
import Vuex from 'vuex';
import blogs from './modules/blogs.js'

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
    modules: {
        blogs
    }
});