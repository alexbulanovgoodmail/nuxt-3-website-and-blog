<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const state = reactive({
	name: undefined,
	message: undefined
})

const validate = (state: any): FormError[] => {
	const errors = []
	if (!state.name) errors.push({ path: 'name', message: 'Обязательное поле' })
	if (!state.message)
		errors.push({ path: 'message', message: 'Обязательное поле' })
	return errors
}

const emits = defineEmits<{
	(e: 'submit-success'): void
}>()

const isLoading = ref<boolean>(false)
const toast = useToast()

async function onSubmit(event: FormSubmitEvent<any>) {
	try {
		isLoading.value = true

		await setTimeout(() => {
			console.log(event.data)
			isLoading.value = false
			emits('submit-success')
		}, 2000)
		toast.add({ title: 'Комментарий добавлен' })
	} catch (error) {
		// TODO: Ошибки
		// toast.add({ color: 'red', title: 'Ошибка' })
		isLoading.value = false
	}
}
</script>

<template>
	<UForm
		:validate="validate"
		:state="state"
		class="comment-form space-y-4"
		@submit="onSubmit"
	>
		<p class="comment-form__title">Оставить комментарий</p>
		<UFormGroup label="Ваше имя" name="name">
			<UInput v-model="state.name" :disabled="isLoading" />
		</UFormGroup>

		<UFormGroup label="Комментарий" name="message">
			<UTextarea v-model="state.message" :disabled="isLoading" />
		</UFormGroup>

		<UButton type="submit" :loading="isLoading"> Отправить </UButton>
	</UForm>
</template>

<style lang="scss" scoped>
.comment-form {
	&__title {
		@apply mb-2 text-2xl text-center;
	}
}
</style>
