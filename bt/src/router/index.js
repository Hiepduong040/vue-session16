import { createWebHistory, createRouter } from 'vue-router';

import Ex01 from '@/views/Ex01/Ex01.vue';
import Ex02 from '@/views/Ex02/Ex02.vue';
import Register from '@/views/Ex03/Register.vue';
import Login from '@/views/Ex04/Login.vue';
import NotFound from '@/views/Ex05/NotFound.vue';
import AboutVue from '@/views/Ex06/AboutVue.vue';
import Product from '@/views/Ex07/Product.vue';
import Detail from '@/views/Ex07/Detail.vue';
import Product from '@/views/Ex08/Product.vue';
import Navbar from '@/views/Ex08/Navbar.vue';
import Dashboard from '@/views/Ex08/Dashboard.vue';
import Account from '@/views/Ex08/Account.vue';
import ListUser from '@/views/Ex09/ListUser.vue';
import UserDetail from '@/views/Ex09/UserDetail.vue';
import ListEmployee from "../views/Bai10/ListEmployee.vue"
import Profile from '@/views/Ex10/Profile.vue';
import Project from '@/views/Ex10/Project.vue';
import Contacts from '@/views/Ex10/Contacts.vue';


const routes = [
  { path: '/', component: Ex01 },
  { path: '/contact', component: Ex02 },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/about', component: AboutVue },
  { path: '/product', component: Product },
  { path: '/detail', component: Detail },
  {
    path: '/navbar',
    component: Navbar,
    children: [
      {
        path: 'product',
        name: 'product',
        component: ProductBai8
      },
      {
        path: 'account',
        name: 'account',
        component: Account
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
      },
    ]
  },
  { path: '/listUser', component: ListUser },
  { path: '/userDetail/:id', component: UserDetail },
  { path: '/listEmployee', component: ListEmployee },
  {
    path: '/listEmployee/:id',
    component: ListEmployee,
    children: [
      {
        path: 'project',
        name: 'project',
        component: Project
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      },
      {
        path: 'contact',
        name: 'contact',
        component: Contacts
      },
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});