<template>
	<div>
		<UContainer>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<PostCard v-for="(post, i) in 4" :key="i" />
			</div>
		</UContainer>
	</div>
</template>
