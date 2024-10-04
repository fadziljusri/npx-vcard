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
  name: chalk.green('Fadzil Jusri') + chalk.yellow(' ⬢ ') + chalk.green(' Full-Stack Developer') + chalk.yellow(' ⬢ ') + chalk.green(' Malaysia'),
  email: chalk.white('fadziljusri@gmail.com'),
  twitter: chalk.cyan('https://twitter.com/fadziljusri'),
  github: chalk.cyan('https://github.com/fadziljusri'),
  linkedin: chalk.cyan('https://linkedin.com/in/fadziljusri'),
  web: chalk.cyan('https://fadziljusri.com'),
  npx: chalk.green('npx fadzil'),
  labelWork: chalk.white.bold('       Work:'),
  labelEmail: chalk.white.bold('      Email:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name}`
const email = `${data.labelEmail}  ${data.email}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name
               newline + newline + // Add one whole blank line
               email + newline + // data.labelEmail + data.email
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
