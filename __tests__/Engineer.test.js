"use strict";
// The first class is an Employee parent class with the following properties and methods:

// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'

// all Employee requirements met inside Engineer.js. Engineer.js imports Employee.js
const Engineer = require("../lib/Engineer");

// In addition to Employee's properties and methods, Engineer will also have the following:

describe("Engineer Constructor", () => {
	describe("Get() Functions Tests", () => {
		// github—GitHub username
		it("can set GitHUb account via constructor", () => {
			const testValue = "GitHubUser";
			const engineer = new Engineer("Foo", 1, "test@test.com", testValue);
			expect(engineer.github).toBe(testValue);
		});

		// getGithub()
		it("can get GitHub username via getGithub()", () => {
			const testValue = "GitHubUser";
			const engineer = new Engineer("Foo", 1, "test@test.com", testValue);
			expect(engineer.getGithub()).toBe(testValue);
		});

		// getRole()—overridden to return 'Engineer'
		it('getRole() should return "Engineer"', () => {
			const testValue = "Engineer";
			const engineer = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
			expect(engineer.getRole()).toBe(testValue);
		});
	});
});
