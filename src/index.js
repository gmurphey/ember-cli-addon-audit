const args = require('./args');
const getAddonNames = require('./get-addon-names');
const getAddonMetadata = require('./get-addon-metadata');
const filterData = require('./filter-data');
const sortData = require('./sort-data');

module.exports = async function emberCliAddonAudit(options) {
  options = Object.keys(args).reduce((opts, key) => {
    opts[key] = options[key];

    if (!opts[key]) {
      opts[key] = args[key].default;
    }

    return opts;
  }, {});

  let addonNames = getAddonNames();
  let metadata = await getAddonMetadata(addonNames);

  return sortData(filterData(metadata, options), options);
}
