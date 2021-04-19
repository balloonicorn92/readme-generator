 const licenseFunc = license => {
     if (license === 'MIT'){
         return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
     } else if (license === 'Apache') {
         return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
     } else if (license === 'GNU') {
        return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    } else if (license === 'Mozilla') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    } else if (license === 'Unlicense') {
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    } 
 }
 
 readmeTemplate = data => {
const {project, Intro, tech, collab, license, install} = data
    return `
# ${project}
-----------------------
## Table of Contents
- Introduction
- Installation
- Technologies used
- Maintainers
- License

-----------------------
### Introduction
${Intro}

-----------------------
### Installation

${install}

-----------------------
### Technologies used
${tech.join(' ')}

-----------------------
### Maintainers
${collab}

-----------------------
#### License
${licenseFunc(license)}
`
}
module.exports = readmeTemplate
