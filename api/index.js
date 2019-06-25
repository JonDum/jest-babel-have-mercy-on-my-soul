//var path = require('path')

const NODE_ENV = process.env.NODE_ENV

console.log(`Starting in ${NODE_ENV} mode...`)

if (NODE_ENV === 'development') {
	global.DEBUG = true
	global.PRODUCTION = false
}

if (NODE_ENV === 'production') {
	global.DEBUG = false
	global.PRODUCTION = true
}

if (DEBUG) {
	require('@babel/register')({
		//needed b/c symlinked files will not get transformed otherwise
		ignore: [/node_modules/i]
	})
}

require('./lib/app')
