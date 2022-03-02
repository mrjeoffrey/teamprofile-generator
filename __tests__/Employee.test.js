"use strict";
const Employee = require("../lib/Employee.js");

// The first class is an Employee parent class with the following properties and methods:

describe("Employee Constructor", () => {
	describe("Initialization", () => {
		it("can instantiate Employee instance", () => {
			const employee = new Employee();
			expect(typeof employee).toBe("object");
		});

		// name
		it("can set name via constructor arguments", () => {
			const name = "Alice";
			const employee = new Employee(name);
			expect(employee.name).toBe(name);
		});

		// id
		it("can set id via constructor argument", () => {
			const testValue = 100;
			const employee = new Employee("Foo", testValue);
			expect(employee.id).toBe(testValue);
		});

		// email
		it("can set email via constructor argument", () => {
			const testValue = "test@test.com";
			const employee = new Employee("Foo", 1, testValue);
			expect(employee.email).toBe(testValue);
		});
	});
	describe("Get() Functions Tests", () => {
		// getName()
		it("can get name via getName()", () => {
			const testValue = "Alice";
			const employee = new Employee(testValue);
			expect(employee.getName()).toBe(testValue);
		});

		// getId()
		it("can get id via getId()", () => {
			const testValue = 100;
			const employee = new Employee("Foo", testValue);
			expect(employee.getId()).toBe(testValue);
		});

		// getEmail()
		it("can get email via getEmail()", () => {
			const testValue = "test@test.com";
			const employee = new Employee("Foo", 1, testValue);
			expect(employee.getEmail()).toBe(testValue);
		});

		// getRole()—returns 'Employee'
		it('getRole() should return "Employee"', () => {
			const testValue = "Employee";
			const employee = new Employee("Alice", 1, "test@test.com");
			expect(employee.getRole()).toBe(testValue);
		});
	});
});
