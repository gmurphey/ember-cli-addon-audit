const getAddonNames = require('./get-addon-names');
const getAddonMetadata = require('./get-addon-metadata');

module.exports = async function emberCliAddonAudit() {
  let addonNames = getAddonNames();

  return await getAddonMetadata(addonNames);
}
