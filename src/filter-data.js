module.exports = function(data, options) {
  return data.filter(({ score }) => score <= options.threshold);
}
