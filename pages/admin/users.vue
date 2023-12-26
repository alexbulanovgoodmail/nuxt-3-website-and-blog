<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import { useAuthStore } from '@/stores/auth'
definePageMeta({
	layout: 'admin',
	middleware: 'auth'
})

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

const toast = useToast()
const { create } = useAuthStore()

const isLoading = ref<boolean>(false)
const authError = ref<string | null>(null)

async function onSubmit(event: FormSubmitEvent<any>) {
	try {
		isLoading.value = true

		await create(form)

		isLoading.value = false
		toast.add({ title: 'Пользователь успешно создан' })

		form.email = ''
		form.password = ''
	} catch (error: any) {
		// TODO: Ошибки
		authError.value = error.message

		isLoading.value = false
	}
}
</script>

<template>
	<UContainer>
		<UCard class="user">
			<template #header>
				<p class="user__title">Создать пользователя</p>
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

					<div v-if="authError" class="user__error text-xs text-red-600">
						{{ authError }}
					</div>

					<UButton block type="submit" :loading="isLoading"> Создать </UButton>
				</UForm>
			</template>
		</UCard>
	</UContainer>
</template>

<style lang="scss" scoped>
.user {
	@apply mx-auto sm:max-w-[480px];

	&__title {
		@apply mb-2 text-xl text-center;
	}
}
</style>
