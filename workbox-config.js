module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{js,jpg,scss,html}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
		/^n/
	]
};