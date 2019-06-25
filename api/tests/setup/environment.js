console.log('setup/environment.js')

// Doesn't seem to do anything
/*
require('@babel/register', {
	rootMode: 'upwards',
	//needed b/c symlinked files will not get transformed otherwise
	ignore: [/node_modules/i]
})
*/

const NodeEnvironment = require('jest-environment-node')

// This imports DB from lib, which then imports 
// {foo} from 'models' which is in common
// but foo does not get transpiled
const DB = require('../../lib/db').default

class CustomEnvironment extends NodeEnvironment {

	constructor(config) {
		super(config)
		this.name =
			'test' +
			crypto
				.createHash('md5')
				.update(new Date().toISOString())
				.digest('hex')
	}

	async setup() {
		// normally sets up database
		// adds a bunch of test data
		// helpers
		// globals
		// etc
		await super.setup()
	}

	async teardown() {
		// tears down db
		await super.teardown()
	}

	runScript(script) {
		return super.runScript(script)
	}

}

//export default CustomEnvironment
module.exports = CustomEnvironment
