<script setup lang="ts">
interface Props {
	comment: Object
}

defineProps<Props>()
</script>

<template>
	<UCard class="post-comment" shadow="never">
		<template #header>
			<p class="post-comment__author">Person Name</p>
			<p class="post-comment__date"><small>20.12.2023, 17:47:37</small></p>
		</template>

		<div class="post-comment__body">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus neque
			tempora iste veritatis laboriosam, repellendus dolorum explicabo
			voluptatibus corrupti praesentium, minus illum unde at voluptatem quas
			doloremque eius. Architecto, doloribus?
		</div>
	</UCard>
</template>

<style lang="scss" scoped>
.post-comment {
	@apply mb-4 rounded-none;

	&__author {
		@apply mb-2;
	}

	&__body {
		@apply px-4 py-5 sm:p-6;

		white-space: pre-line;
	}
}
</style>
