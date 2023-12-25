<script setup lang="ts">
definePageMeta({
	layout: 'empty'
})
</script>

<template>
	<div>
		<UContainer>
			<AdminLogin @on-success="() => navigateTo('/admin/')" />
		</UContainer>
	</div>
</template>
