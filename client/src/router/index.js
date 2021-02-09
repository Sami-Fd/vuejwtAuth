import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Cars from '../views/Cars.vue'
import axios from 'axios'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home

  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cars',
    name: 'Cars',
    component: Cars
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  // ...
  if (to.path !== '/login' && to.path !== '/check' && to.path !== '/signup' && to.path !== '/') {
    checkAuth()
  } else {
    console.log("Other paths...")
  }
  next()
})
function checkAuth() {
  axios
    .get("http://localhost:3000/check")
    .then(response => {
      console.log(response)
      if (!response.data.check) {
        console.log("Redirect...");
        router.push('/login');
      } else if (response.data.check) {
        console.log("User:", response.data)
      }
    }
    ).catch(e => {
      console.log(e)
      router.push('/login');
    })
}


export default router
