"use strict";
// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'

// all Employee requirements met inside Intern.js. Intern.js imports Employee.js
const Intern = require("../lib/Intern");

// In addition to Employee's properties and methods, Intern will also have the following:

describe("Intern Constructor", () => {
	describe("Get() Functions Tests", () => {
		// school
		it("can set school via constructor", () => {
			const testValue = "UCLA";
			const intern = new Intern("Foo", 1, "test@test.com", testValue);
			expect(intern.school).toBe(testValue);
		});

		// getSchool()

		it("can get school via getSchool()", () => {
			const testValue = "UCLA";
			const intern = new Intern("Foo", 1, "test@test.com", testValue);
			expect(intern.getSchool()).toBe(testValue);
		});

		// getRole()—overridden to return 'Intern'
		it('getRole() should return "Intern"', () => {
			const testValue = "Intern";
			const intern = new Intern("Foo", 1, "test@test.com", "UCLA");
			expect(intern.getRole()).toBe(testValue);
		});
	});
});
