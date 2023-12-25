<script setup lang="ts">
const router = useRouter()

function handleOpenPost() {
	const slug = 'test-slug'
	router.push(`/blog/${slug}`)
}
</script>

<template>
	<UCard class="post-card">
		<template #header>
			<div class="post-card__header">
				<p>POST title</p>
				<small>20.12.2023, 17:47:37</small>
			</div>
		</template>

		<div class="post-card__img-container">
			<img
				class="post-card__img"
				src="https://avatars.mds.yandex.net/i?id=4285614d31acb7076416ae8c3a1003c1984296a0-10686310-images-thumbs&n=13"
				width="328"
				height="185"
			/>
		</div>

		<template #footer>
			<div class="post-card__footer">
				<UButton @click="handleOpenPost">Смотреть</UButton>

				<div class="post-card__comments">
					<UIcon name="i-heroicons-chat-bubble-bottom-center-text" />
					<span class="post-card__comment-count">290</span>
				</div>
			</div>
		</template>
	</UCard>
</template>

<style lang="scss" scoped>
.post-card {
	@apply min-h-[200px];

	&__img-container {
		position: relative;

		&::before {
			content: '';
			display: block;
			width: 100%;
			padding-top: calc(100% / (328 / 185));
		}
	}

	&__img {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&__footer {
		@apply flex items-center justify-between;
	}

	&__comments {
		@apply flex items-center space-x-1;
	}

	&__comment-count {
		@apply text-sm;
	}
}
</style>
