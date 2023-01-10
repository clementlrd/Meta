import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home');
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