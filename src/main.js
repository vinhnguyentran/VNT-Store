// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import App from './App'
import router from './router'
import store from './store/index'
import axios from "axios";
import { initializeApp } from 'firebase/app';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDhm8i8_aWp0SbvJ3OxZPZ-UH3cjqOCIyw",
  authDomain: "v-tech-16038.firebaseapp.com",
  databaseURL: "https://v-tech-16038-default-rtdb.firebaseio.com",
  projectId: "v-tech-16038",
  storageBucket: "v-tech-16038.appspot.com",
  messagingSenderId: "774292164678",
  appId: "1:774292164678:web:4830c7819491cffdb6fa47",
  measurementId: "G-9S9ETFKNT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  vuetify,

  render: h => h(App)
}).$mount("#app")
