
describe('Role based access control', () => {

	test('global.db should have foo', () => {
		expect(global.db)
			.toBeDefined()
		expect(global.db.foo)
			.toBeDefined()
	}) 

})
