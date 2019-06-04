const nock = require('nock');
const handlebars = require('handlebars');

const source = `
  <svg xmlns="http://www.w3.org/2000/svg" width="142" height="20">
    <linearGradient id="b" x2="0" y2="100%">
      <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
      <stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <mask id="a">
      <rect width="142" height="20" rx="3" fill="#fff"/>
    </mask>
    <g mask="url(#a)">
      <path fill="#555" d="M0 0h106v20H0z"/>
      <path fill="#9f9f9f" d="M106 0h36v20h-36z"/>
      <path fill="url(#b)" d="M0 0h142v20H0z"/>
    </g>
    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
      <text x="54" y="15" fill="#010101" fill-opacity=".3">
        ember observer
      </text>
      <text x="54" y="14">
        ember observer
      </text>
      <text x="123" y="15" fill="#010101" fill-opacity=".3">
        {{#if score}}{{score}} / 10{{else}}n/a{{/if}}
      </text>
      <text x="123" y="14">
        {{#if score}}{{score}} / 10{{else}}n/a{{/if}}
      </text>
    </g>
  </svg>
`;
const template = handlebars.compile(source);

const scoreMap = {
  'ember-cli-babel': 10,
  'qunit-dom': 10
};

module.exports = function() {
  nock('https://emberobserver.com')
    .get(/\/badges\/.*\.svg$/)
    .reply(function(uri) {
      let addonName = /\/(.*)\.svg/.test(uri)[1];
      let score = scoreMap[addonName];

      return [200, template.data({ score })];
    })
    .persist();
};
