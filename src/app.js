var comp1= require('./components/comp1.vue');
var comp2= require('./components/comp2.vue');

var Vue = require('vue');
var VueRouter = require('vue-router');
Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        { path: '/comp1', component: comp1},
        { path: '/comp2', component: comp2}
    ]
});

// <a href='xxx'></a>
new Vue({
    router: router
}).$mount('#app');
