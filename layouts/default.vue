<script setup lang="ts">
useHead({
	titleTemplate: '%s | Веб-сайт и Блог'
})
</script>

<template>
	<div>
		<Header />

		<div class="mb-12 lg:mb-24">
			<slot />
		</div>
	</div>
</template>
