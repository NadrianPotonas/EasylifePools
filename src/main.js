import {createApp} from 'vue'
import {createRouter,createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Pools from './views/Pools.vue'
import Equipment from './views/Equipment.vue'
import Services from './views/Services.vue'
import Gallery from './views/Gallery.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import './style.css'
const router=createRouter({history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
{path:'/',component:Home},{path:'/pools',component:Pools},
{path:'/equipment',component:Equipment},
{path:'/services',component:Services},
{path:'/gallery',component:Gallery},
{path:'/about',component:About},
{path:'/contact',component:Contact},
{path:'/:pathMatch(.*)*',redirect:'/'}],scrollBehavior(){return {top:0}}})
createApp(App).use(router).mount('#app')
