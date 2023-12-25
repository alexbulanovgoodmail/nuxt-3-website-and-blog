<script setup lang="ts">
const route = useRoute()
</script>

<template>
	<article class="post">
		<UContainer>
			<div class="post__info-container">
				<UButton
					color="black"
					icon="i-heroicons-arrow-uturn-left"
					variant="link"
					>Назад</UButton
				>
				<div class="post__info">
					<small class="post__date">20.12.2023, 17:47:37</small>

					<div class="post__views">
						<UIcon name="i-heroicons-eye" />
						<span class="post__views-count">29</span>
					</div>
				</div>
			</div>

			<div class="post__header">
				<h1 class="post__title">Post slug {{ route.params.slug }}</h1>
			</div>
			<div class="post__body">
				<div class="post__img-container">
					<img
						class="post__img"
						src="https://avatars.mds.yandex.net/i?id=094c879918bf7ff18a4a5efd247107f8f4070811-10555703-images-thumbs&n=13"
					/>
				</div>

				<div class="post__text">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
						quo?
					</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
						eligendi quam labore molestiae laboriosam, culpa aspernatur
						provident delectus corporis deleniti!
					</p>
				</div>
			</div>
			<div class="post__footer">
				<div>Форма</div>
			</div>
		</UContainer>
	</article>
</template>

<style lang="scss" scoped>
.post {
	&__header {
		@apply my-6;
	}

	&__title {
		@apply my-6 text-5xl;
	}

	&__info-container {
		@apply flex items-center justify-between;
	}

	&__info {
		@apply flex items-center space-x-4;
	}

	&__views {
		@apply flex items-center space-x-1;
	}

	&__views-count {
		@apply text-sm;
	}

	&__img-container {
		position: relative;

		&::before {
			content: '';
			display: block;
			width: 100%;
			padding-top: calc(100% / (16 / 9));
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

	&__body {
		@apply mb-6;
	}

	&__text {
		@apply mt-6;

		p + p {
			@apply mt-2;
		}
	}
}
</style>
