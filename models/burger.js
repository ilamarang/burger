var orm = require('../config/orm.js');

var burger = {

selectAll:function(cb) {
  orm.selectAll(cb)

}


}

module.exports = burger;
