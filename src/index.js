const getAddonNames = require('./get-addon-names');
const getAddonMetadata = require('./get-addon-metadata');
const orderBy = require('lodash.orderby');

module.exports = async function emberCliAddonAudit() {
  let addonNames = getAddonNames();
  let metadata = await getAddonMetadata(addonNames);
  let unscoredAddons = metadata.filter(({ score }) => score === '?');
  let scoredAddons = metadata.filter(({ score }) => score !== '?');

  return orderBy(scoredAddons, ['score'], ['desc'])
    .concat(
      unscoredAddons
    );
}
