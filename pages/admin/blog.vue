<script setup lang="ts">
definePageMeta({
	layout: 'admin',
	middleware: 'auth'
})

const { pending, data: posts } = useLazyFetch('/api/admin-posts/')

const columns = [
	{
		key: 'date',
		label: 'Дата'
	},
	{
		key: 'title',
		label: 'Заголовок'
	},
	{
		key: 'views',
		label: 'Просмотры'
	},
	{
		key: 'comments',
		label: 'Комментарии'
	},
	{
		key: 'actions'
	}
]

const items = row => [
	[
		{
			label: 'Редактировать',
			icon: 'i-heroicons-pencil-square-20-solid',
			click: () => editPost(row.id)
		}
	],

	[
		{
			label: 'Удалить',
			icon: 'i-heroicons-trash-20-solid',
			click: () => removePost(row.id)
		}
	]
]

function removePost(id: number) {
	console.log('Delete', id)
}

function editPost(id: number) {
	console.log('Edit', id)
}
</script>

<template>
	<div>
		<UContainer>
			<UTable
				:rows="posts"
				:columns="columns"
				:loading="pending"
				:loading-state="{
					icon: 'i-heroicons-arrow-path-20-solid',
					label: 'Loading...'
				}"
			>
				<template #actions-data="{ row }">
					<UDropdown :items="items(row)">
						<UButton
							color="gray"
							variant="ghost"
							icon="i-heroicons-ellipsis-horizontal-20-solid"
						/>
					</UDropdown>
				</template>
			</UTable>
		</UContainer>
	</div>
</template>
