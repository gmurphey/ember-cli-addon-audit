'use strict';

const emberCliAddonAudit = require('.');
const args = require('./args');
const reporter = require('./reporter');
const chalk = require('chalk');

module.exports = {
  name: 'addon-audit',
  description: 'Fetch Ember Observer scores for all of your project\'s top-level addons',
  works: 'insideProject',

  availableOptions: [
    {
      name: 'threshold',
      type: Number,
      description: args['threshold'].description,
      default: args['threshold'].default
    }
  ],

  async run(options) {
    console.warn(chalk.yellow('Warning: This command sends your top-level dependencies (and dev dependencies) to Ember Observer to determine the score.\n\n'))

    let metadata = await emberCliAddonAudit(options);
    let output = reporter(metadata);

    console.log(output);
  }
}
