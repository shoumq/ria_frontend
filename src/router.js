import { createRouter, createWebHistory } from "vue-router";
import List from './pages/List.vue';
import AddForm from './pages/AddForm.vue';
import Product from './pages/Product.vue';

export default createRouter({
    hashbang: false,
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: List,
        },
        {
            path: '/add',
            component: AddForm,
        },
        {
            path: '/product/:id',
            component: Product,
        }
    ]
})
