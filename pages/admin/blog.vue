<script setup lang="ts">
definePageMeta({
	layout: 'admin',
	middleware: 'auth'
})

const { pending, data: posts } = useLazyFetch('/api/admin/blog/')

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

function editPost(id: number) {
	navigateTo(`/admin/post/${id}`)
}

const isOpen = ref<boolean>(false)
const removePostId = ref<number | undefined>(undefined)

function removePost(id: number) {
	isOpen.value = true
	removePostId.value = id
}

const toast = useToast()
async function handleConfirmDeletion() {
	// TODO логика удаления

	posts.value = posts.value?.filter(p => p.id !== removePostId.value)
	await toast.add({ title: 'Запись успешно удалена' })

	isOpen.value = false
}

function handleRejectDeletion() {
	isOpen.value = false
	removePostId.value = undefined
}

watch(isOpen, newValue => {
	if (newValue === false) {
		removePostId.value = undefined
	}
})
</script>

<template>
	<div>
		<UModal v-model="isOpen">
			<div class="p-4">
				<p class="mb-6 text-xl text-center">Удалить эту запись</p>

				<div class="grid grid-cols-2 gap-4">
					<UButton
						block
						color="red"
						label="Да"
						@click="handleConfirmDeletion"
					/>

					<UButton
						block
						color="gray"
						label="Отмена"
						@click="handleRejectDeletion"
					/>
				</div>
			</div>
		</UModal>

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
