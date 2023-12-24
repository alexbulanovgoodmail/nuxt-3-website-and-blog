module.exports = {
	extends: 'stylelint-config-standard-scss',
	plugins: ['stylelint-prettier'],
	customSyntax: 'postcss-html',
	overrides: [
		{
			files: ['**/*.vue']
		}
	],
	rules: {
		'prettier/prettier': true
	}
}
