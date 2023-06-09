// TODO: Create a function that returns a license badge based on which license is passed in // If there is no license, return an empty string
function renderLicenseBadge(license) {}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // add in the data enterd by user as well as calling to get api badge
  return `# ${data.title}
  ${data.license === 
    "Apache License 2.0" ? "Apache License 2.0" + "" + '<br>' + "" + "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : data.license === "MIT" ? "MIT" + "" + '<br>' + "" + "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : data.license === "IBM" ? "IBM" + "" + '<br>' + "" + "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" : "Perl" + "" + '<br>' + "" + "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"}
## Description 
  ${data.description}
## Table of Contents
  - [Installation](#installation)
 - [Usage](#usage) 
 - [Contributing Guidlines](#contributing) 
 - [Tests](#tests) 
 - [Questions](#questions) 
 - [License](#license)
## Installation 
  ${data.installation}
## Usage 
  ${data.usage}
## Contributing 
  ${data.contributing}
## Tests 
  ${data.tests}
## Questions
  Contact me at my github or my email for further questions: https://github.com/${data.questions}
## License
   License under ${data.license}
  `;
}
module.exports = generateMarkdown;
