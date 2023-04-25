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
  // change choices to match what was asked
  return `# ${data.title}
## Description 
  ${data.description}
## Table of Contents
 ${data.toc === 
" - [Installation](#installation)\n - [Usage](#usage)\n - [Contributing Guidlines](#contributing)\n - [Tests](#tests)\n - [Questions](#questions)\n - [License](#License)"}
## Installation 
  ${data.installation}
## Usage 
  ${data.usage}
## Contributing 
  ${data.contributing}
## Tests 
  ${data.tests}
## Questions
  ${data.questions}
## License
  ${data.license === 
  "Apache License 2.0" ? "Apache License 2.0" + "" + '<br>' + "" + "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : data.license === "MIT" ? "MIT" + "" + '<br>' + "" + "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : data.license === "IBM" ? "IBM" + "" + '<br>' + "" + "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" : "Perl" + "" + '<br>' + "" + "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"}
`;
}
module.exports = generateMarkdown;
