const findPlugins = require('find-plugins');
const blacklisted = ['ember-source'];

module.exports = function() {
  let addonsMeta = findPlugins({
    keyword: 'ember-addon',
    configName: 'ember-addon',
    includeDev: true
  });

  return addonsMeta.map((addon) => {
    return addon.pkg.name;
  }).filter((name) => {
    return !blacklisted.includes(name);
  });
}
