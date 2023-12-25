<script setup lang="ts">
import { onMounted } from 'vue'

const route = useRoute()

definePageMeta({
	layout: 'empty'
})

const toast = useToast()

onMounted(() => {
	if (route.query?.message) {
		toast.add({ title: route.query?.message, color: 'gray' })
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
