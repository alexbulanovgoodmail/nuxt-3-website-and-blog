<template>
	<nav class="nav">
		<ul class="nav__list">
			<li class="nav__item">
				<NuxtLink class="nav__link" to="/">Главная</NuxtLink>
			</li>
			<li class="nav__item">
				<NuxtLink class="nav__link" to="/blog/">Блог</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
.nav {
	&__list {
		@apply flex items-center space-x-4 font-mono;
	}
}
</style>
