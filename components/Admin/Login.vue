<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import { useAuthStore } from '@/stores/auth'

interface Form {
	email: string
	password: string
}

const form = reactive<Form>({
	email: '',
	password: ''
})

const validate = (form: any): FormError[] => {
	const errors = []
	if (!form.email) errors.push({ path: 'email', message: 'Обязательное поле' })
	if (!form.password)
		errors.push({ path: 'password', message: 'Обязательное поле' })
	return errors
}

const { login } = useAuthStore()

const emits = defineEmits<{
	(e: 'on-success'): void
}>()

const isLoading = ref<boolean>(false)
const authError = ref<string | null>(null)
async function onSubmit(event: FormSubmitEvent<any>) {
	try {
		isLoading.value = true

		await login(form)

		isLoading.value = false

		emits('on-success')
	} catch (error: any) {
		// TODO: Ошибки
		authError.value = error.message

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
				:state="form"
				class="space-y-4"
				@submit="onSubmit"
			>
				<UFormGroup label="Почта" name="email">
					<UInput v-model="form.email" :disabled="isLoading" />
				</UFormGroup>

				<UFormGroup label="Пароль" name="password">
					<UInput
						v-model="form.password"
						type="password"
						:disabled="isLoading"
					/>
				</UFormGroup>

				<div v-if="authError" class="admin-login__error text-xs text-red-600">
					{{ authError }}
				</div>

				<UButton block type="submit" :loading="isLoading"> Войти </UButton>
			</UForm>
		</template>
	</UCard>
</template>

<style lang="scss" scoped>
.admin-login {
	@apply mx-auto sm:max-w-[380px];

	&__title {
		@apply mb-2 text-xl text-center;
	}
}
</style>
