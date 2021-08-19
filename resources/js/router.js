import vueRouter from "vue-router"
import Vue from 'vue'

Vue.use(vueRouter)

import Index from "./views/Index"
import Blog from "./views/Blog"
import Post from "./views/Post"
import Create from "./views/Create"

const routes = [
    {
        path: "/",
        component: Index
    },
    {
        path: "/blog",
        component: Blog
    },
    {
        path: "/post/:id",
        component: Post
    } ,
    {
        path: "/create",
        component: Create
    }
]

export default new vueRouter({
    mode: "history",
    routes
})
