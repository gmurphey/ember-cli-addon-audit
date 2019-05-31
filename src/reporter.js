const { table } = require('table');

module.exports = function(metadata) {
  const config = {
    columns: {
      0: {
        alignment: 'left'
      },
      1: {
        alignment: 'left'
      },
      2: {
        alignment: 'right'
      }
    }
  };

  let rows = [
    ['Addon', 'Ember Observer Link', 'Score']
  ];

  const data = metadata.reduce((rows, { name, link, score }) => {
    rows.push([name, link, score]);

    return rows;
  }, rows);

  return table(data, config);
}
