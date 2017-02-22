'use strict';

module.exports = function (KryptstormSjUsers) {
  KryptstormSjUsers.on('attached', function () {
    KryptstormSjUsers.deleteById = function (id, cb) {
      return KryptstormSjUsers.update({id: id}, {status: 3}, cb);
    }
  });
};
