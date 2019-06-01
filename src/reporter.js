const {
  table,
  getBorderCharacters
 } = require('table');

const chalk = require('chalk');

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
    },
    border: getBorderCharacters(`void`),
    columnDefault: {
      paddingLeft: 0,
      paddingRight: 1
    },
    drawHorizontalLine() {
      return false;
    }
  };

  let rows = [
    ['Addon', 'Ember Observer Link', 'Score']
  ];

  const data = metadata.reduce((rows, { name, link, score }) => {
    let color = '#9f9f9f';

    if (score !== '?') {
      if (score < 3) {
        color = '#ff7e63';
      } else if (score < 5) {
        color = '#fbab61';
      } else if (score < 7) {
        color = '#ede217';
      } else if (score < 9) {
        color = '#7ecf27';
      } else {
        color = '#28b36d';
      }
    }

    rows.push([chalk.hex(color)(name), link, score]);

    return rows;
  }, rows);

  return table(data, config);
}
