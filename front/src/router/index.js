import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home');
const Trombi = () => import('@/views/Trombi');
const Program = () => import('@/views/Program');
//const Acti = () => import('@/views/Acti');
//const Goodies = () => import('@/views/Goodies');
// Error page
const Error404 = () => import('@/views/error pages/404');
const Futur = () => import('@/views/error pages/Futur');

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
			path: '/program',
			component: Program,
		},
		{
			path: '/acti',
			component: Futur,
		},
		{
			path: '/goodies',
			component: Futur,
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