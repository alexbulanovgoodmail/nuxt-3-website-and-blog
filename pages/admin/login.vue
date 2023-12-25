<script setup lang="ts">
import { onMounted } from 'vue'

const route = useRoute()

definePageMeta({
	layout: 'empty'
})

const toast = useToast()

onMounted(() => {
	switch (route.query?.message) {
		case 'login':
			toast.add({ title: 'Для начала войдите в систему', color: 'gray' })
			break

		case 'logout':
			toast.add({ title: 'Вы успешно вышли из системы' })
			break

		default:
			break
	}
})
</script>

<template>
	<div>
		<UContainer>
			<AdminLogin @on-success="() => navigateTo('/admin/')" />
		</UContainer>
	</div>
</template>
