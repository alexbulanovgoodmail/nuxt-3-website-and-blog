<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const state = reactive({
	email: undefined,
	password: undefined
})

const validate = (state: any): FormError[] => {
	const errors = []
	if (!state.email) errors.push({ path: 'email', message: 'Обязательное поле' })
	if (!state.password)
		errors.push({ path: 'password', message: 'Обязательное поле' })
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
		// TODO: Ошибки

		isLoading.value = false
	}
}
</script>

<template>
	<UCard class="admin-login">
		<template #header>
			<p class="admin-login__title">Войти</p>

			<UForm
				:validate="validate"
				:state="state"
				class="space-y-4"
				@submit="onSubmit"
			>
				<UFormGroup label="Почта" name="email">
					<UInput v-model="state.email" :disabled="isLoading" />
				</UFormGroup>

				<UFormGroup label="Пароль" name="password">
					<UInput
						v-model="state.password"
						type="password"
						:disabled="isLoading"
					/>
				</UFormGroup>

				<UButton block type="submit" :loading="isLoading"> Войти </UButton>
			</UForm>
		</template>
	</UCard>
</template>

<style lang="scss" scoped>
.admin-login {
	@apply mx-auto sm:max-w-[380px];

	&__title {
		@apply mb-2 text-2xl text-center;
	}
}
</style>
