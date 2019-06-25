const {join, resolve} = require('path')
const {createTransformer} = require('babel-jest')

const packagePath = resolve('../../../')
const packageGlob = join(packagePath, '*')

console.log('transformer-wrapper')
console.log(packagePath)


module.exports = createTransformer({
	rootMode: 'upwards',
	//needed to transform files outside cwd
	ignore: [/node_modules/i],
})

//const config = require(resolve(packagePath, './babel.config.js'))
//module.exports = createTransformer({
	//babelRc: false,
	//...config,
	////needed to transform files outside cwd
	//ignore: [/node_modules/i],
//})
