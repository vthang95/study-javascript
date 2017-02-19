/**
 * @author Tuan Nguyen
 * @company Kryptstorm.com
 * @date 2/18/17
 */

'use strict';

let p = require('../package.json'), version;
if (typeof p.version === 'string') {
  version = p.version.split('.').shift();
}

module.exports = {
  "restApiRoot": '/api' + (version > 0 ? '/v' + version : ''),
  "host": "0.0.0.0",
  "port": process.env.KS_PORT,
  "remoting": {
    "context": false,
    "rest": {
      "handleErrors": false,
      "normalizeHttpPath": false,
      "xml": false
    },
    "json": {
      "strict": false,
      "limit": "100kb"
    },
    "urlencoded": {
      "extended": true,
      "limit": "100kb"
    },
    "cors": false
  }
};
