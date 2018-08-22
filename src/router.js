'use strict';
import VueRouter from 'vue-router';

import Starting from './components/Starting.vue';
import Category from './components/Category.vue';
import Game from './components/Game.vue';

export default new VueRouter ({
    routes: [{
        path: '/',
        component: Starting,
        name: 'home'
    }, {
        path: '/category',
        component: Category,
        name: 'category'
    }, {
        path: '/discovery',
        component: Game,
        name: 'game'
    }, {
        path: '*',
        redirect: {
            name: 'home'
        }
    }]
})