<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
const { logout } = useAuthStore()

const isLoading = ref<boolean>(false)

async function handleLogout() {
	try {
		isLoading.value = true
		await logout()
		isLoading.value = false

		return navigateTo({
			path: '/admin/login/',
			query: {
				message: 'logout'
			}
		})
	} catch (e) {
		isLoading.value = false
	}
}
</script>

<template>
	<UButton
		color="red"
		icon="i-heroicons-arrow-left-start-on-rectangle-solid"
		:loading="isLoading"
		@click="handleLogout"
		>Выйти</UButton
	>
</template>
