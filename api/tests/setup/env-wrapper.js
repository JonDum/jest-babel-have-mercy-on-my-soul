require('@babel/register', {
	//needed b/c symlinked files will not get transformed otherwise
	ignore: [/node_modules/i]
})

module.exports = require('./environment')
