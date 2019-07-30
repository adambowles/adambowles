'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('             Adam Bowles'),
  handle: chalk.white('adambowles'),
  work: chalk.white('Developer at Nimvelo'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('adambowles'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~adambowles'),
  github: chalk.gray('https://github.com/') + chalk.green('adambowles'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('adambowles'),
  web: chalk.cyan('https://adambowl.es'),
  npx: chalk.red('npx') + ' ' + chalk.white('adambowles'),
  labelWork: chalk.white.bold('       Work 🖥'),
  labelTwitter: chalk.white.bold('    Twitter 🐦'),
  labelnpm: chalk.white.bold('        npm 📦'),
  labelGitHub: chalk.white.bold('     GitHub 🐙'),
  labelLinkedIn: chalk.white.bold('   LinkedIn 🔗'),
  labelWeb: chalk.white.bold('        Web 🌍'),
  labelCard: chalk.white.bold('             $')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter} ${data.twitter}`
const npming = `${data.labelnpm} ${data.npm}`
const githubing = `${data.labelGitHub} ${data.github}`
const linkedining = `${data.labelLinkedIn} ${data.linkedin}`
const webing = `${data.labelWeb} ${data.web}`
const carding = `${data.labelCard} ${data.npx}`

// prettier-ignore
// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
  newline + newline + // Add one whole blank line
  working + newline + // data.labelWork + data.work
  twittering + newline + // data.labelTwitter + data.twitter
  npming + newline + // data.labelnpm + data.npm
  githubing + newline + // data.labelGitHub + data.github
  linkedining + newline + // data.labelLinkedIn + data.linkedin
  webing + newline + newline + // data.labelWeb + data.web
  carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
