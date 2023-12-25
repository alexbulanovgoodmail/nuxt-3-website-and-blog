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

const isLoading = ref<boolean>(false)

async function onSubmit(event: FormSubmitEvent<any>) {
	try {
		isLoading.value = true

		await setTimeout(() => {
			console.log(event.data)
			isLoading.value = false
		}, 2000)
	} catch (error) {
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
			<UInput v-model="state.name" />
		</UFormGroup>

		<UFormGroup label="Комментарий" name="message">
			<UTextarea v-model="state.message" />
		</UFormGroup>

		<UButton type="submit" :loading="isLoading"> Отправить </UButton>
	</UForm>
</template>

<style lang="scss" scoped>
.comment-form {
	&__title {
		@apply mb-6 text-2xl;
	}
}
</style>
