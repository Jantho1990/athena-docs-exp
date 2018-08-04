import Vue from 'vue'
import VueRouter from 'vue-router'
import CodicesPage from './components/pages/CodicesPage'
import NotesPage from './components/pages/NotesPage'

Vue.use(VueRouter)

const routes = [
  { path: '/codices', component: CodicesPage },
  { path: '/notes', component: NotesPage }
]

const router = new VueRouter({
  routes
})

export default router
