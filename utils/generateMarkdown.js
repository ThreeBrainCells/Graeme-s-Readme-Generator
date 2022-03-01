// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  // if (license != "No License") {
  //   return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
  // } else{return ''}

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if (license != "No License") {
  //   return `[${license}](#license)`
  // } else{return ''}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    console.log(renderLicenseBadge(license))
    console.log(renderLicenseLink(license))
    console.log("This section worked!");
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licence = renderLicenseSection(data.license);
  return `# ${data.title}
  ##Hi, I'm ${data.name}, and this is a README!
  
  ##${licence}`;


}

module.exports = {generateMarkdown};
