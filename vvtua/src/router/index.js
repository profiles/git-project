import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index'
import about from '@/views/about'
import contacts from '@/views/contacts'
import works from '@/views/works'
import workdetail from '@/views/workdetail'
import workauthor from '@/views/workauthor'

Vue.use(Router)


let router = new Router({
    routes: [
        {
            path: '/',
            redirect:'/index'
        },
        {
            path:'/index',
            name: 'index',
            component: index
        },
        {
            path:'/about',
            name: 'about',
            component: about
        },
        {
            path:'/contacts',
            name: 'contacts',
            component: contacts
        },
        {
            path:'/works',
            name: 'works',
            component: works
        },
        {
            path:'/works/detail/:id',
            name: 'workdetail',
            component: workdetail
        },
        {
            path:'/works/author/:id',
            name: 'workauthor',
            component: workauthor
        }
    ]
});
export default router
