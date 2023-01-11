import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home');
const Trombi = () => import('@/views/Trombi');
const Campaign = () => import('@/views/Campaign');
// Error page
const Error404 = () => import('@/views/error pages/404');

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		// Main
		{
			path: '/',
			component: Home,
		},
		{
			path: '/members',
			component: Trombi,
		},
		{
			path: '/campaign',
			component: Campaign,
		},
    // ERROR pages
    {
			path: '/404',
			component: Error404,
		},
    {
			path: "*",
			component: Error404,
		},
  ],
  mode: 'history',
})

export default router