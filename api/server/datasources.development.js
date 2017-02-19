/**
 * @author Tuan Nguyen
 * @company Kryptstorm.com
 * @date 2/19/17
 */

'use strict';

module.exports = {
  "MySQL": {
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "url": `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`,
    "database": process.env.DB_DATABASE,
    "password": process.env.DB_PASSWORD,
    "name": "MySQL",
    "user": process.env.DB_USER,
    "connector": "mysql"
  }
};
