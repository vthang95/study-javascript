/**
 * @author Tuan Nguyen
 * @company Kryptstorm.com
 * @date 2/18/17
 */

'use strict';

const server = require('./../server');
const ds = server.dataSources.MySQL;
const lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role', 'Scope', 'Application', 'KryptstormSjUsers'];

ds.automigrate(lbTables, function (err) {
  if (err) {
    throw err;
  }
  console.log('Loopback tables [' + lbTables.join(', ') + '] created in ', ds.adapter.name);
  ds.disconnect();
});
