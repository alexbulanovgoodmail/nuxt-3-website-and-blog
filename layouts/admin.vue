<script setup>
const isOpen = ref(false)
</script>

<template>
	<div class="my-14 lg:my-24">
		<UContainer>
			<UButton label="Открыть" @click="isOpen = true" />
		</UContainer>

		<div class="my-4 lg:my-6">
			<slot />
		</div>

		<USlideover v-model="isOpen">
			<div>
				<UButton label="Закрыть" @click="isOpen = false" />
			</div>
			<div class="p-4 flex-1">
				<div class="h-full"></div>
			</div>
		</USlideover>
	</div>
</template>
