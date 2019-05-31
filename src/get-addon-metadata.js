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
          resolve(JSON.parse(data));
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
    return promisedRequest(`https://emberobserver.com/api/v2/addons?filter%5Bname%5D=${addon}&page%5Blimit%5D=1`)
  });

  let responses = await Promise.all(requests);

  let successfulResponses = responses.filter((response) => {
    return !response.errors;
  })

  return successfulResponses.map((response, i) => {
    let { name, score } = response.data[0].attributes;

    return {
      name,
      score,
      link: `https://emberobserver.com/addons/${name}`
    };
  });
}

