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
    type: 'input',
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

inquirer.prompt(questions)
  .then(async (answers) => {
    await replace({ files: ['./package.json', './quasar.conf.js', './README.md', './src/App.vue'], from: /ExampleName/g, to: answers.name })
      .catch((error) => logger(`Project name caused an error: ${error}`, 'red'));

    await replace({ files: ['./package.json', './quasar.conf.js', './README.md'], from: /ExampleDescription/g, to: answers.description })
      .catch((error) => logger(`Setting description caused an error: ${error}`, 'red'));

    if (/^([0-9]+)\.([0-9]+)\.([0-9]+)/gm.test(answers.version)) {
      await replace({ files: ['./package.json', './package-lock.json'], from: `${version}`, to: answers.version })
        .catch((error) => logger(`Setting version caused an error: ${error}`, 'red'));
    } else {
      logger(`Inputted version number does not comply with semantic versioning scheme; used default ${version}`, 'yellow');
    }

    if (answers.dependabot === 'yes') {
      fs.rmSync('.github', { recursive: true, force: true });
    }

    logger('\n\nCongrats! Now you can start developing your awesome application!\n\n');
  })
  .catch((error) => {
    if (error.isTtyError) logger('Prompt couldn\'t be rendered in the current environment.', 'red');
    else logger(`An error occurred: ${error}`, 'red');
  });

const base = './variables/.env.';
const generateFiles = (env) => {
  fs.copyFile(`${base}example`, `${base}${env}`, (error) => {
    if (error) logger(`Setting ${env} environment file caused an error: ${error}`, 'red');
    replace({ files: [`${base}${env}`], from: 'ENVIRONMENT =', to: `ENVIRONMENT = ${env}` })
      .catch(() => logger(`Replacing value of ${env} environment variable caused an error`, 'red'));
  });
};
['local', 'development', 'production'].forEach(generateFiles);

fs.rmSync('generator.js', { recursive: true, force: true });
