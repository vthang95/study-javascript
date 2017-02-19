/**
 * @author Tuan Nguyen
 * @company Kryptstorm.com
 * @date 2/18/17
 */

'use strict';

module.exports = {
  "_meta": {
    "sources": [
      "loopback/common/models",
      "loopback/server/models",
      "../common/models",
      "./models"
    ],
    "mixins": [
      "loopback/common/mixins",
      "loopback/server/mixins",
      "../common/mixins",
      "./mixins"
    ]
  },
  "User": {
    "dataSource": "MySQL",
    "public": true
  },
  "AccessToken": {
    "dataSource": "MySQL",
    "public": false
  },
  "ACL": {
    "dataSource": "MySQL",
    "public": false
  },
  "RoleMapping": {
    "dataSource": "MySQL",
    "public": false
  },
  "Role": {
    "dataSource": "MySQL",
    "public": false
  },
  "Scope": {
    "dataSource": "MySQL",
    "public": false
  },
  "Application": {
    "dataSource": "MySQL",
    "public": false
  },
  "KryptstormSjUsers": {
    "dataSource": "MySQL",
    "public": true
  }
};
