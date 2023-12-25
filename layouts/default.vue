<script setup lang="ts">
useHead({
	titleTemplate: '%s | Веб-сайт и Блог'
})
</script>

<template>
	<div>
		<Header />
		<slot />
	</div>
</template>
