<script setup lang="ts">
const route = useRoute()
</script>

<template>
	<div>
		<UContainer>
			<h1>{{ route.params.slug }}</h1>
		</UContainer>
	</div>
</template>
