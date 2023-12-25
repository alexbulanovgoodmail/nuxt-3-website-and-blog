<script lang="ts" setup>
interface Error {
	error: {
		statusCode: number
		statusMessage: string
		message: string
	}
}

defineProps<Error>()

const handleError = () => {
	clearError({
		redirect: '/'
	})
}
</script>

<template>
	<NuxtLayout name="page-error">
		<div class="error">
			<UContainer>
				<template v-if="error.statusCode === 404">
					<div>
						<h1 class="error__title">Запрашиваемая страница не найдена</h1>
						<p class="error__text">
							Кажется что-то пошло не так. Запрашиваемая вами страница не
							существует. Возможно она была удалена или был введён неверный
							адрес в адресной строке
						</p>
					</div>
				</template>
				<template v-else>
					<div>
						<h1 class="error__title">{{ error.statusCode }}</h1>
						<p class="error__text">
							{{ error.statusMessage }}
						</p>
						<p class="error__text">
							{{ error.message }}
						</p>
					</div>
				</template>

				<div>
					<UButton @click="handleError">Перейти на главную</UButton>
				</div>
			</UContainer>
		</div>
	</NuxtLayout>
</template>

<style lang="scss" scoped>
.error {
	@apply mx-auto flex flex-col justify-center h-[100vh] max-w-[640px] text-center;

	&__title {
		@apply mb-6 text-2xl;
	}

	&__text {
		@apply my-4;
	}
}
</style>
