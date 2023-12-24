module.exports = {
	extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
		extraFileExtensions: ['.vue']
	},
	plugins: ['@typescript-eslint', 'prettier'],
	root: true,
	rules: {
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { args: 'none' }]
	}
}
