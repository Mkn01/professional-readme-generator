//import inquirer and fs
const fs = require("fs");
const inquirer = require("inquirer");
const { json } = require("stream/consumers");

// questions array
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter your project name",
  },

  {
    type: "input",
    name: "description",
    message: "Please enter a description",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter usage instruction",
  },
  {
    type: "list",
    name: "license",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "Mozilla Public License 2.0",
      "GNU General Public License v3.0",
    ],
    message: "Please select the License you are using ",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please enter any contributing data",
  },
  {
    type: "input",
    name: "tests",
    message: "please provide instruction to run test",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide an email",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Please enter your GitHub username",
  },
];
//function to generate user input to readme
const generateInputToReadme = (answers) => {
  const createReadme = (answer) => {
    const title = `# ${answer.projectTitle} ![](https://img.shields.io/badge/MIT-License-green)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

${answer.description}

## Installation

Please follow the instructions below:
````

${answer.installation}

````
## Usage

Please follow the instructions below:

````
${answer.usage}
````

## License

${answer.license}

## Contributing

${answer.contributing}

## Tests

Please follow the instructions below:

````
${answer.tests}
````

## Questions

Please contact me on my email: ${answer.email}

Visit my GitHub profile [here](https://github.com/${answer.gitHubUsername})`;
  };
  return answers.map(createReadme).join("");
};

const init = async () => {
  //prompt questions save answers
  const answers = await inquirer.prompt(questions);

  //display answers
  console.log(answers);
  // generate user input to readme
  const readMe = `# ${generateInputToReadme(
    answers
  )} ![](https://img.shields.io/badge/MIT-License-green)

  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description
  
  ${generateInputToReadme(answers)}
  
  ## Installation
  
  Please follow the instructions below:
  ````
  
  ${generateInputToReadme(answers)}
  
  ````
  ## Usage
  
  Please follow the instructions below:
  
  ````
  ${generateInputToReadme(answers)}
  ````
  
  ## License
  
  ${generateInputToReadme(answers)}
  
  ## Contributing
  
  ${generateInputToReadme(answers)}
  
  ## Tests
  
  Please follow the instructions below:
  
  ````
  ${generateInputToReadme(answers)}
  ````
  
  ## Questions
  
  Please contact me on my email: ${generateInputToReadme(answers)}
  
  Visit my GitHub profile [here](https://github.com/${generateInputToReadme(
    answers
  )})`;
  //write generated readme to file
  fs.writeFileSync("Generated_README.md", readMe);
};

init();
