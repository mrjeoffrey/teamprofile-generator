// required packages #################################
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// inquirer prompts #################################

const prompts = {
	// WHEN I start the application
	// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

	manager: [
		{
			type: `input`,
			name: `managerName`,
			message: `What is your manager's name?`,
		},
		{
			type: `input`,
			name: `managerId`,
			message: `What is your manager's ID?`,
		},
		{
			type: `input`,
			name: `managerEmail`,
			message: `What is your manager's email?`,
		},
		{
			type: `input`,
			name: `managerOfficeNumber`,
			message: `What is your manager's office number?`,
		},
	],

	// WHEN I select the engineer option
	// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

	engineer: [
		{
			type: `input`,
			name: `engineerName`,
			message: `What is your engineer's name?`,
		},
		{
			type: `input`,
			name: `engineerId`,
			message: `What is your engineer's ID?`,
		},
		{
			type: `input`,
			name: `engineerEmail`,
			message: `What is your engineer's email?`,
		},
		{
			type: `input`,
			name: `engineerGithub`,
			type: `What is your engineer's GitHub?`,
		},
	],

	// WHEN I select the intern option
	// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

	intern: [
		{
			type: `input`,
			name: `internName`,
			message: `What is your intern's name?`,
		},
		{
			type: `input`,
			name: `internId`,
			message: `What is your intern's ID?`,
		},
		{
			type: `input`,
			name: `internEmail`,
			message: `What is your intern's email?`,
		},
		{
			type: `input`,
			name: `internSchool`,
			message: "What school does your intern attend?",
		},
	],

	// WHEN I enter the team manager’s name, employee ID, email address, and office number
	// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

	newMember: [
		{
			type: `list`,
			name: `newMember`,
			message: `What would you like to do?`,
			choices: [`Add Engineer`, `Add Intern`, `Finish building team`],
		},
	],
};

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information

// build index.html file #################################

// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// initialize function #################################
