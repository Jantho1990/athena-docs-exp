import Vue from 'vue'
import VueRouter from 'vue-router'
import CodicesPage from './components/pages/CodicesPage'
import CodexPage from './components/pages/CodexPage'
import NotesPage from './components/pages/NotesPage'
import NotePage from './components/pages/NotePage'

Vue.use(VueRouter)

const routes = [
  { path: '/codices', component: CodicesPage },
  { path: '/notes', component: NotesPage },
  { path: '/codex/:id', component: CodexPage },
  { path: '/notes/:id', component: NotePage }
]

const router = new VueRouter({
  routes
})

export default router
