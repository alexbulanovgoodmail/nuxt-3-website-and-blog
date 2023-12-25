<template>
	<header class="header">
		<UContainer>
			<div class="header__container">
				<Logo />
				<Nav />
			</div>
		</UContainer>
	</header>
</template>

<style lang="scss" scoped>
.header {
	@apply py-6;

	&__container {
		@apply flex items-center justify-between;
	}
}
</style>
