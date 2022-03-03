"use strict";
// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'

// all Employee requirements met inside Manager.js. Manager.js imports Employee.js
const Manager = require("../lib/Manager");

// In addition to Employee's properties and methods, Manager will also have the following:

describe("Manager Constructor", () => {
	describe("Get() Functions Test", () => {
		// officeNumber
		it("can set office number via constructor argument", () => {
			const testValue = 100;
			const manager = new Manager("Foo", 1, "test@test.com", testValue);
			expect(manager.officeNumber).toBe(testValue);
		});

		it("can get office number via getOffice()", () => {
			const testValue = 100;
			const manager = new Manager("Foo", 1, "test@test.com", testValue);
			expect(manager.getOfficeNumber()).toBe(testValue);
		});

		// getRole()—overridden to return 'Manager'

		it('getRole() should return "Manager"', () => {
			const testValue = "Manager";
			const manager = new Manager("Foo", 1, "test@test.com", 100);
			expect(manager.getRole()).toBe(testValue);
		});
	});
});
