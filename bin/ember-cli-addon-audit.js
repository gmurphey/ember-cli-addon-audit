#!/usr/bin/env node
'use strict';

const args = require('../src/args');
const { run: emberCliAddonAudit } = require('../src/command');
const { argv } = require('yargs').options(args);

(async() => {
  try {
    let message = await emberCliAddonAudit(argv);

    if (message) {
      console.log(message);
    }
  } catch (err) {
    console.error(err);
  }
})();
