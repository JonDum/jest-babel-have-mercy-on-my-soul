const path = require('path')

require('@babel/register', {
	//needed to transform files outside cwd
	ignore: [/node_modules/i]
})

module.exports = {

	// Attempt to set rootDir up a dir
	//rootDir: '../',
	//roots: ['./api/tests'],
	// Attempted to make a wrapper that then re-exports the actual env
	//testEnvironment: '<rootDir>/api/tests/setup/env-wrapper.js',
	//testEnvironment: '<rootDir>/api/tests/setup/environment.js',
	//transform: {
		//'^.+\\.[jt]sx?$': '<rootDir>/api/tests/setup/transformer-wrapper.js',
	//},
	//transform: {
		//'^.+\\.[jt]sx?$': 'babel-jest',
	//},


	//testEnvironment: '<rootDir>/tests/setup/env-wrapper.js',
	testEnvironment: '<rootDir>/tests/setup/environment.js',

	transform: {
		'^.+\\.[jt]sx?$': '<rootDir>/tests/setup/transformer-wrapper.js',
	}

}
