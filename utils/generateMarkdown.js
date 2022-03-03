// TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   // if (license != "No License") {
//   //   return `[${license}](#license)`
  // } else{return ''}
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "No License") {
    let licSec = ''
    switch (license){
      case 'MIT':
        licSec = `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)
        More info: https://opensource.org/licenses/MIT`;
        break;
      case 'Apache':
        licSec =  `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)
        More info: https://opensource.org/licenses/Apache-2.0`;
        break;
      case 'GPL':
        licSec = `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)
        More info: https://www.gnu.org/licenses/gpl-3.0.en.html`;
        break;
      case 'BSD3':
        licSec = `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)
        More info: https://opensource.org/licenses/BSD-3-Clause`
        break;
      default:
        console.log('No license? No problem.')
    }
    return licSec
  } else{return ''}
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licence = renderLicenseSection(data.license);
  return `# ${data.title}
  ## By ${data.name}!

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Demonstration](#demonstration)
- [Contributors](#contributors)
- [License](#license)

  <a id="description"></a>
  ## Project Description
  ---------------------------------
  ### ${data.description}

  <a id="installation"></a>
  ## Installation Instructions
  -----------------
  ### ${data.install}

  <a id="usage"></a>
  ## User Instructions
  -----------------
  ### ${data.usage}

  <a id="demonstration"></a>
  ## Demonstration
-----------------------------------
  ### Links and Screenshots go here

  <a id="contributors"></a>
  ## Contribution Credits
  -----------------------
  ### ${data.contributors}

  <a id="questions"></a>
  ## For Questions
---------------------------------
  ### My Github Profile is here: ${data.github}
  
  <a id="license"></a>
  ## Licensing
  ----------------------------
  ## ${licence}`;


}

module.exports = {generateMarkdown};
