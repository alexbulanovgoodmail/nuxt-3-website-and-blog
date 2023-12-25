import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
	const { isAuthenticated } = storeToRefs(useAuthStore())

	if (!isAuthenticated.value) {
		return navigateTo({
			path: '/admin/login/',
			query: {
				message: 'login'
			}
		})
	}
})
