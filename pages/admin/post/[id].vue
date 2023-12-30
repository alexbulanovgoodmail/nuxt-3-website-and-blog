<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

definePageMeta({
	layout: 'admin',
	middleware: 'auth'
})

const route = useRoute()

const { data: post } = await useFetch(`/api/admin/blog/${route.params.id}`)

useHead({
	title: post.value?.title || ''
})

const links = [
	{
		label: 'Все записи',
		icon: 'i-heroicons-newspaper',
		to: '/admin/blog/'
	},
	{
		label: post.value?.title || 'Запись в блоге',
		icon: 'i-heroicons-document-text'
	}
]

interface Form {
	text: string
}

const form = reactive<Form>({
	text: ''
})

const validate = (form: any): FormError[] => {
	const errors = []
	if (!form.text) errors.push({ path: 'text', message: 'Обязательное поле' })
	return errors
}

const isLoading = ref<boolean>(false)

async function onSubmit(event: FormSubmitEvent<any>) {
	try {
		isLoading.value = true

		await console.log('ff')

		isLoading.value = false
	} catch (error: any) {
		isLoading.value = false
	}
}
</script>

<template>
	<div>
		<UContainer>
			<UBreadcrumb :links="links" />

			<div class="my-6">
				<div v-if="post" class="my-4">
					<div class="flex items-center space-x-4">
						<small class="flex">{{ post.date }}</small>
						<small class="flex items-center space-x-1">
							<UIcon name="i-heroicons-eye" />
							<span>
								{{ post.views }}
							</span>
						</small>
					</div>
				</div>
				<UForm
					:validate="validate"
					:state="form"
					class="space-y-4"
					@submit="onSubmit"
				>
					<UFormGroup label="Текст в формате .md или .html" name="text">
						<UTextarea v-model="form.text" :rows="10" :disabled="isLoading" />
					</UFormGroup>

					<UButton type="submit" :loading="isLoading"> Сохранить </UButton>
				</UForm>
			</div>
		</UContainer>
	</div>
</template>

<style lang="scss" scoped></style>
