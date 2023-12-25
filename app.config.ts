export default defineAppConfig({
	ui: {
		container: {
			base: 'mx-auto',
			padding: 'px-4 lg:px-15',
			constrained: 'max-w-6xl'
		},
		button: {
			rounded: 'rounded-none'
		},
		card: {
			body: 'p-0'
		},
		notifications: {
			// Show toasts at the top right of the screen
			position: 'top-0 left-1/2 bottom-auto -translate-x-1/2'
		}
	}
})
