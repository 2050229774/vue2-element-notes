import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const NoteQuery = () => import('../views/notequery/NoteQuery.vue')
const ProportionalDistribution = () => import('../views/Proportionaldistribution/ProportionalDistribution.vue')
const AddNotes = () => import('../views/addnotes/AddNotes.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
	path: '/notequery',
	name: 'NoteQuery',
	component: NoteQuery
  },
  {
	path: '/proportionaldistribution',
	name: 'ProportionalDistribution',
	component: ProportionalDistribution
  },
  {
	path: '/addnotes',
	name: 'AddNotes',
	component: AddNotes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
