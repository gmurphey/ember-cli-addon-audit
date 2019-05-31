'use strict';

const emberCliAddonAudit = require('.');
const reporter = require('./reporter');

module.exports = {
  name: 'addon-audit',
  description: 'Fetch Ember Observer scores for all of your project\'s top-level addons',
  works: 'insideProject',

  async run() {
    let metadata = await emberCliAddonAudit();
    let output = reporter(metadata);

    console.log(output);
  }
}
