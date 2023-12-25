<script setup lang="ts">
const links = [
	{
		label: 'Аналитика',
		to: '/admin/',
		icon: 'i-heroicons-presentation-chart-line'
	},
	{
		label: 'Создать запись в блоге',
		to: '/admin/create/',
		icon: 'i-heroicons-document-plus'
	},
	{
		label: 'Все записи в блоге',
		to: '/admin/blog/',
		icon: 'i-heroicons-newspaper'
	},
	{
		label: 'Все пользователи',
		to: '/admin/users/',
		icon: 'i-heroicons-users'
	}
]

const emit = defineEmits<{
	(e: 'on-navigation'): void
}>()

function handleNavigation(event: Event) {
	const target = event.target as HTMLAnchorElement

	if (target.closest('a')) {
		emit('on-navigation')
	}
}
</script>

<template>
	<div class="admin-aside">
		<UVerticalNavigation
			class="admin-aside__navigation"
			:links="links"
			@click="handleNavigation"
		>
			<template #default="{ link }">
				<span class="group-hover:text-primary relative"> {{ link.label }}</span>
			</template>
		</UVerticalNavigation>

		<UButton color="red" icon="i-heroicons-arrow-left-start-on-rectangle-solid"
			>Выйти</UButton
		>
	</div>
</template>

<style lang="scss" scoped>
.admin-aside {
	&__navigation {
		@apply mb-6;
	}
}
</style>
