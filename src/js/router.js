import VueRouter from 'vue-router'
import IndexComponent from '../components/Index.vue'
import LoginComponent from "../components/member/Login.vue"
import CSSexComponent from '../components/cssex/CSSEX1.vue'
import FooterexComponent from "../components/cssex/Footerex.vue"
import HeaderEx from "../components/cssex/headerex.vue"
import HeaderEx2 from "../components/cssex/headerex2.vue"
import Register from "../components/member/Register.vue"

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: '/', component: IndexComponent },
    { path: '/login', component: LoginComponent },
    { path: '/css', component: CSSexComponent},
    { path: '/footer', component: FooterexComponent},
    { path: '/header', component: HeaderEx },
    { path: '/header2', component: HeaderEx2 },
    { path: '/register', component: Register }
  ]
});

export default router;