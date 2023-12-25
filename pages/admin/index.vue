<script setup lang="ts">
definePageMeta({
	layout: 'admin',
	middleware: 'auth'
})
</script>

<template>
	<div>
		<UContainer>
			<h1>Welcome to admin page</h1>
		</UContainer>
	</div>
</template>
