'use strict';

module.exports = {
  name: require('../package.json').name,

  includedCommands() {
    return {
      'addon-audit': require('./command')
    }
  }
}
