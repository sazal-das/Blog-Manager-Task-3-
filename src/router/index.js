import Vue from 'vue';
import VueRouter from 'vue-router';
import Blog from '../components/Blog.vue';
import AddBlog from '../components/AddBlog.vue';

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name: "Home",
        component: Blog
    },
    {
        path:'/addblog',
        name: "AddBlog",
        component: AddBlog
    },
    
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  });

export default router
