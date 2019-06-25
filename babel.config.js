
console.log('javascript/babel.config.js')

module.exports = {
	presets: ['@babel/preset-flow'],
	plugins: [
		//'@babel/plugin-transform-async-to-generator',
		'@babel/plugin-transform-runtime',
		['@babel/plugin-proposal-decorators', {legacy: true}],
		['@babel/plugin-proposal-class-properties', {loose: true}],
		'@babel/plugin-proposal-export-default-from'
		//["transform-imports", {
		//"ui": {
		//"transform": "ui/antd/${member}",
		//"preventFullImport": true
		//},
		//}]
	]
}
