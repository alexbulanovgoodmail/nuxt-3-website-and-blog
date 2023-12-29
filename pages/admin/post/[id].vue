<script setup lang="ts">
definePageMeta({
	layout: 'admin',
	middleware: 'auth'
})
const route = useRoute()

const links = [
	{
		label: 'Все записи',
		icon: 'i-heroicons-newspaper',
		to: '/admin/blog/'
	},
	{
		label: 'Запись ' + route.params.id,
		icon: 'i-heroicons-document-text'
	}
]
</script>

<template>
	<div>
		<UContainer>
			<UBreadcrumb :links="links" />

			<div class="my-6">
				<h1>Post {{ route.params.id }}</h1>
			</div>
		</UContainer>
	</div>
</template>
