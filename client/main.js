import {Meteor} from 'meteor/meteor';
import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';
import App from './components/App.vue';
import routerFactory from './configs/router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import vSelect from 'vue-select'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-select/dist/vue-select.css';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('v-select', vSelect)

Vue.use(VueMeteorTracker);

Meteor.startup(() => {
  const router = routerFactory.create();
  new Vue({
    router,
    render: h => h(App)
  }).$mount('app');
});