'use strict';

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

// Text + chalk definitions
const data = {
  name: chalk.white('           Adam Bowles'),
  handle: chalk.white('adambowles'),
  work: chalk.white('Developer at Nimvelo'),
  twitter: chalk.white('https://twitter.com/') + chalk.cyan('adambowles'),
  github: chalk.white('https://github.com/') + chalk.green('adambowles'),
  npm: chalk.white('https://npmjs.com/') + chalk.red('~adambowles'),
  linkedin: chalk.white('https://linkedin.com/in/') + chalk.blue('adambowles'),
  keybase: chalk.white('https://keybase.io/') + chalk.yellow('adambowles'),
  email: chalk.white('card@adambowl.es'),
  web: chalk.cyan.underline('https://adambowl.es'),
  npx: chalk.red('npx') + ' ' + chalk.white('adambowles'),
  labelWork: chalk.white.bold('    Work 🖥'),
  labelTwitter: chalk.white.bold(' Twitter 🐦'),
  labelnpm: chalk.white.bold('     npm 📦'),
  labelGitHub: chalk.white.bold('  GitHub 🐙'),
  labelLinkedIn: chalk.white.bold('LinkedIn 🔗'),
  labelKeybase: chalk.white.bold(' Keybase 🔑'),
  labelEmail: chalk.white.bold('   Email 📧'),
  labelWeb: chalk.white.bold('     Web 🌍'),
  labelCard: chalk.white.bold('          $'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter} ${data.twitter}`;
const githubing = `${data.labelGitHub} ${data.github}`;
const npming = `${data.labelnpm} ${data.npm}`;
const linkedining = `${data.labelLinkedIn} ${data.linkedin}`;
const keybasing = `${data.labelKeybase} ${data.keybase}`;
const emailing = `${data.labelEmail} ${data.email}`;
const webing = `${data.labelWeb} ${data.web}`;
const carding = `${data.labelCard} ${data.npx}`;

// prettier-ignore
// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline +
  newline +
  working + newline +
  emailing + newline +
  newline +
  twittering + newline +
  githubing + newline +
  npming + newline +
  linkedining + newline +
  keybasing + newline +
  webing + newline +
  newline +
  carding

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  chalk.green(boxen(output, options)),
);
