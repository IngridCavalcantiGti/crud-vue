import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueCompositionAPI from '@vue/composition-api'
import  'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'ant-design-vue/dist/antd.css';
import { Button } from 'ant-design-vue';
import { Modal } from 'ant-design-vue';
import { Input } from 'ant-design-vue';

Vue.use(Button);
Vue.use(Modal);
Vue.use(Input);

Vue.use(VueCompositionAPI)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
