const chalk = require('chalk');
const inquirer = require('inquirer');
const replace = require('replace-in-file');
const fs = require('fs');
const { version } = require('./package.json');

const logger = (text, color = 'green') => console.log(chalk[color](text));
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'The name of your project is...?',
    default: 'Starter',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What\'s the proper description of this project?',
    default: 'Quasar template for quickly starting projects',
  },
  {
    type: 'number',
    name: 'version',
    message: 'Starting this project at version...?',
    default: `${version}`,
  },
  {
    type: 'list',
    name: 'dependabot',
    message: 'Do you wish to disable Dependabot version updates?',
    choices: ['No', 'Yes'],
    filter: (val) => val.toLowerCase(),
    default: 'No',
  },
];

inquirer.prompt(questions).then((answers) => {
  replace({ files: ['./package.json', './quasar.conf.js', './README.md', './src/App.vue'], from: 'ExampleName', to: answers.name })
    .catch((error) => logger(`Project name caused an error: ${error}`, 'red'));

  replace({ files: ['./package.json', './quasar.conf.js', './README.md'], from: 'ExampleDescription', to: answers.description })
    .catch((error) => logger(`Setting description caused an error: ${error}`, 'red'));

  replace({ files: ['./package.json', './package-lock.json'], from: `${version}`, to: answers.version })
    .catch((error) => logger(`Setting version caused an error: ${error}`, 'red'));

  const base = './variables/.env.';

  fs.copyFile(`${base}example`, `${base}local`, (error) => {
    if (error) logger(`Setting local environment file caused an error: ${error}`, 'red');
    replace({ files: [`${base}local`], from: 'ENVIRONMENT =', to: 'ENVIRONMENT = local' })
      .catch(() => logger('Replacing value of local environment variable caused an error', 'red'));
  });

  fs.copyFile(`${base}example`, `${base}development`, (error) => {
    if (error) logger(`Setting development environment file caused an error: ${error}`, 'red');
    replace({ files: [`${base}development`], from: 'ENVIRONMENT =', to: 'ENVIRONMENT = development' })
      .catch(() => logger('Replacing value of local development variable caused an error', 'red'));
  });

  fs.copyFile(`${base}example`, `${base}production`, (error) => {
    if (error) logger(`Setting production environment file caused an error: ${error}`, 'red');
    replace({ files: [`${base}production`], from: 'ENVIRONMENT =', to: 'ENVIRONMENT = production' })
      .catch(() => logger('Replacing value of local production variable caused an error', 'red'));
  });

  if (answers.dependabot === 'yes') {
    fs.rmSync('.github', { recursive: true, force: true });
  }

  logger('\n\nCongrats! Now you can start developing your awesome application!\n\n');
})
  .catch((error) => {
    if (error.isTtyError) logger('Prompt couldn\'t be rendered in the current environment.', 'red');
    else logger(`An error occurred: ${error}`, 'red');
  });

fs.rmSync('generator.js', { recursive: true, force: true });
