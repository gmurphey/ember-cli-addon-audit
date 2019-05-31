#!/usr/bin/env node
'use strict';

const { run: emberCliAddonAudit } = require('../src/command');

(async() => {
  try {
    let message = await emberCliAddonAudit();

    if (message) {
      console.log(message);
    }
  } catch (err) {
    console.error(err);
  }
})();
