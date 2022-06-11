//import inquirer and fs
const fs = require("fs");
const inquirer = require("inquirer");

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
    name: "githubUrl",
    message: "Please enter the url to your GitHub profile",
  },
];
//switch statement to generate badge
const returnUrlForLicense = (licenseType) => {
  switch (licenseType) {
    case "MIT License":
      return "https://img.shields.io/badge/MIT-License-green";
    case "Apache License 2.0":
      return "https://img.shields.io/badge/license-Apache%202.0-green";
    case "Mozilla Public License 2.0":
      return "https://img.shields.io/badge/license-Mozilla%20Public%202.0-green";
    case "GNU General Public License v3.0":
      return "https://img.shields.io/badge/license-GNU%20General%20Public%20v3.0-green";
  }
};

//function to generate user input to readme

const generateInputToReadme = (answers) => {
  return `# ${answers.title} ![](${returnUrlForLicense(answers.license)})

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Developer Information](#developer-information)

## Description

${answers.description}

## Installation

Please follow the instructions below:


${answers.installation}


## Usage

Please follow the instructions below:

\`\`\`
${answers.usage}
\`\`\`

## License

${answers.license}

## Contributing

${answers.contributing}

## Tests

Please follow the instructions below:


${answers.tests}


## Developer Information

Please contact me on my email: ${answers.email}

Visit my GitHub profile [here](${answers.githubUrl})`;
};

const init = async () => {
  //prompt questions save answers
  const answers = await inquirer.prompt(questions);

  //display answers
  console.log(answers);
  // generate user input to readme
  const readMe = generateInputToReadme(answers);
  //write generated readme to file
  fs.writeFileSync("Generated_README.md", readMe);
};

init();
