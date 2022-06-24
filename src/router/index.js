import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import VueCompositionAPI from '@vue/composition-api'
import  'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'ant-design-vue/dist/antd.css';
import { Button } from 'ant-design-vue';
import { Modal } from 'ant-design-vue';
import { Input } from 'ant-design-vue';
import { Table } from 'ant-design-vue';
import { Menu } from 'ant-design-vue';
import { Layout } from 'ant-design-vue';
import { Divider } from 'ant-design-vue';

Vue.use(Button);
Vue.use(Modal);
Vue.use(Input);
Vue.use(Table);
Vue.use(Menu);
Vue.use(Layout);
Vue.use(Divider);

Vue.use(VueCompositionAPI)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
