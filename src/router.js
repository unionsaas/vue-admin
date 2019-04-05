import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: ()=> import('./views/Home.vue'),
            children:[
                {path: 'dashboard', component: ()=>import('./components/Dashboard.vue')},
                {path: 'appinfo', component: ()=>import('./views/app/AppInfo.vue')},
                {path: 'taskAdd', component: ()=>import('./views/task/TaskAdd.vue')}
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue')
        }
    ]
})
