import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storeData = {
    state: {
        storeName: 'V-Tech'
    }
}

const store = new Vuex.Store(storeData)

export default store