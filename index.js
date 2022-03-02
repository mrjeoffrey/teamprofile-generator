"use strict";
// required packages #################################
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// constructors
class Employee {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
	}
	getName() {
		return this.name;
	}

	getId() {
		return this.id;
	}
	getEmail() {
		return this.email;
	}
	getRole() {
		return "Employee";
	}
}

class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
	}

	getRole() {
		return "Engineer";
	}
	getGithub() {
		return this.github;
	}
}

class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);
		this.school = school;
	}

	getSchool() {
		return this.school;
	}
	getRole() {
		return "Intern";
	}
}

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
	}
	getOfficeNumber() {
		return this.officeNumber;
	}

	getRole() {
		return "Manager";
	}
}

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

const team = [];

const output = path.resolve(__dirname, `index.html`);

async function init() {
	console.log("Build your team!");
	const answers = await inquirer.prompt(prompts.manager);

	const manager = new Manager(
		answers.managerName,
		answers.managerId,
		answers.managerEmail,
		answers.managerOfficeNumber
	);

	team.push(manager);

	makeTeam();
}

async function addEngineer() {
	const answers = await inquirer.prompt(prompts.engineer);

	const engineer = new Engineer(
		answers.engineerName,
		answers.engineerId,
		answers.engineerEmail,
		answers.engineerGithub
	);

	team.push(engineer);
	makeTeam();
}

async function addIntern() {
	const answers = await inquirer.prompt(prompts.intern);

	const intern = new Intern(
		answers.internName,
		answers.internId,
		answers.internEmail,
		answers.internSchool
	);

	team.push(intern);
	makeTeam();
}

async function makeTeam() {
	try {
		for (let i = 0; i < team.length; i++) {
			console.log(team[i].name + " is in your team");
		}
		const userChoice = await inquirer.prompt(prompts.newMember);
		switch (userChoice.newMember) {
			case `Add Engineer`:
				addEngineer();
				break;
			case `Add Intern`:
				addIntern();
				break;
			case `Finish building team`:
				finishedTeam();
		}
	} catch (err) {
		console.error(err);
	}
}

// build index.html file #################################

// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

function makeCard(employee) {
	const name = employee.getName();
	const id = employee.getId();
	const role = employee.getRole();
	const email = employee.getEmail();
	let lastItem = "";
	let lastLabel = "";
	let color1 = "";
	let color2 = "";

	if (role === "Intern") {
		lastLabel = "School";
		lastItem = employee.getSchool();
		color1 = `uk-label-warning`;
		color2 = `uk-text-warning`;
	} else if (role === "Engineer") {
		lastLabel = "GitHub";
		lastItem = `<a class="uk-text-primary" href="https://github.com/${employee.getGithub()}">@${employee.getGithub()}</a>`;
		color1 = `uk-label`;
		color2 = `uk-text-primary`;
	} else {
		lastLabel = "Office Number";
		lastItem = employee.getOfficeNumber();
		color1 = `uk-label-danger`;
		color2 = `uk-text-danger`;
	}

	return cardProps({
		name: name,
		role: role,
		id: id,
		email: email,
		lastItem: lastItem,
		lastLabel: lastLabel,
		color1: color1,
		color2: color2,
	});
}

// HEADER HTML
let header = [
	`<!DOCTYPE html>
    <html>
    
    <head>
        <title>Team Profile Generator</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="./src/css/uikit.min.css" />
        <script src="./src/js/uikit.min.js"></script>
        <script src="./src/js/uikit-icons.min.js"></script>
    
    </head>
    
    <body>
        <!-- HEADER -->
        <div class="uk-section uk-dark">
            <div class="uk-container">
    
                <h3>My Teams</h3>
    
                <div class="uk-grid-match uk-child-width-1-2@m" uk-grid>
                    <div>
                        <p>This is a list of my teammates. Use the searchbar to search for them.</p>
    
                        <div class="uk-margin">
                            <form class="uk-search uk-search-default">
                                <span uk-search-icon></span>
                                <input class="uk-search-input" type="search" placeholder="Search">
                            </form>
                        </div>
                    </div>
    
    
                </div>
    
            </div>
        </div>
    
        <!-- EMPLOYEES -->
    
        <div class="uk-section uk-section-muted uk-section-large">
            <div class="uk-container">
    
                <h3>Employees</h3>
    
                <div class="uk-grid-match uk-child-width-expand@m" uk-grid>`,
];

// CARD
function cardProps(properties) {
	const { name, role, id, email, lastItem, lastLabel, color1, color2 } =
		properties;
	return `
    <div>
    <div class="uk-card uk-card-small uk-card-default">

        <div class="uk-card-header">
            <span>ID: ${id}</span>
            <div class="uk-card-badge ${color1}">${role}</div>

        </div>
        <div class="uk-card-body">
            <div class="uk-grid-small uk-flex-middle" uk-grid>

                <div class="uk-width-expand">

                    <h3 class="uk-margin-remove-bottom ${color2}">${name}
                    </h3>
                 
                </div>
                <div class="uk-width-auto">
                    <img class="uk-border-circle" width="60" height="60"
                        src="https://picsum.photos/id/237/200/200">
                </div>
            </div>
            <ul class="uk-list uk-list-divider uk-text-emphasis">
                <li><strong>Email</strong> <br><a class="${color2}href="mailto:${email}?subject="Inquiry">${email}</a></li>
                <li><strong>${lastLabel}</strong> <br>${lastItem}</li>

            </ul>
        </div>
        <div class="uk-card-footer">
            <a href="mailto:${email}?subject=Inquiry" class="uk-button uk-button-text uk-align-right ${color2}">Contact</a>
        </div>
    </div>
</div>
`;
}

let closeHeader = [
	`
                
    </div>
    </div>
</div>



</body>

</html>`,
];

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

function finishedTeam() {
	const htmlBody = team.map((employee) => makeCard(employee));

	const builtHtml = [header, ...htmlBody, closeHeader].join("");

	// console.log ("please?" + builtHtml)

	fs.writeFile(output, builtHtml, (err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("Finished building team!");
		}
	});
}

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// initialize function #################################
init();
