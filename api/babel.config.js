console.log('api babel.config')

const path = require('path')
const common = require('../babel.config.js')

module.exports = {
	presets: [
		...common.presets,
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
					esmodules: false
				},
				modules: 'cjs',
				debug: false
			}
		]
	],

	plugins: [
		...common.plugins,
		'babel-plugin-dynamic-import-node',
		[
			'module-resolver',
			{
				root: [
					path.resolve(__dirname, './lib'),
					path.resolve(__dirname, '../common')
				],
			}
		]
	]
}
