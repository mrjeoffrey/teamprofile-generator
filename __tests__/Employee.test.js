"use strict";
const Employee = require("../lib/Employee.js");

// The first class is an Employee parent class with the following properties and methods:

test("Can instantiate Employee instance", () => {
	const employee = new Employee();
	expect(typeof employee).toBe("object");
});

// name
test("Can set name via constructor arguments", () => {
	const name = "Alice";
	const employee = new Employee(name);
	expect(employee.name).toBe(name);
});

// id
test("Can set id via constructor argument", () => {
	const testValue = 100;
	const employee = new Employee("Foo", testValue);
	expect(employee.id).toBe(testValue);
});

// email
test("Can set email via constructor argument", () => {
	const testValue = "test@test.com";
	const employee = new Employee("Foo", 1, testValue);
	expect(employee.email).toBe(testValue);
});

// getName()
test("Can get name via getName()", () => {
	const testValue = "Alice";
	const employee = new Employee(testValue);
	expect(employee.getName()).toBe(testValue);
});

// getId()
test("Can get id via getId()", () => {
	const testValue = 100;
	const employee = new Employee("Foo", testValue);
	expect(employee.getId()).toBe(testValue);
});

// getEmail()
test("Can get email via getEmail()", () => {
	const testValue = "test@test.com";
	const employee = new Employee("Foo", 1, testValue);
	expect(employee.getEmail()).toBe(testValue);
});

// getRole()—returns 'Employee'
test('getRole() should return "Employee"', () => {
	const testValue = "Employee";
	const employee = new Employee("Alice", 1, "test@test.com");
	expect(employee.getRole()).toBe(testValue);
});
