const orderBy = require('lodash.orderby');

module.exports = function(data) {
  let unscoredAddons = data.filter(({ score }) => score === '?');
  let scoredAddons = data.filter(({ score }) => score !== '?');

  return orderBy(scoredAddons, ['score'], ['desc'])
    .concat(
      unscoredAddons
    );
};
