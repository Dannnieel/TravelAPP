module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{js,jpg,scss,html}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
		/^n/
	]
};