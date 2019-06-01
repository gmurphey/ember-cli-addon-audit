const https = require('https');

function promisedRequest(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      let data = '';

      response.on('data', function(chunk) {
        data += chunk;
      });

      response.on('end', function() {
        try {
          resolve(data);
        } catch (e) {
          throw e;
        }
      });
    });

    request.on('error', (err) => reject(err))
  });
}

module.exports = async function(addonNames) {
  let requests = addonNames.map((addon) => {
    addon = addon.replace(/\@|\/|\./g, '-')
    return promisedRequest(`https://emberobserver.com/badges/${addon}.svg`);
  });

  let responses = await Promise.all(requests);

  return responses.map((response, i) => {
    let scoreRegexp = /\<text.*\>(\d+\.?\d?)\s\/\s10\<\/text\>/gi;
    let scoreMatches = scoreRegexp.exec(response);
    let score = (scoreMatches && scoreMatches.length > 1 && parseFloat(scoreMatches[1])) || '?';

    return {
      name: addonNames[i],
      score,
      link: `https://emberobserver.com/addons/${addonNames[i]}`
    };
  });
}

