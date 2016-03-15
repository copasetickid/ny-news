var moment = require('moment');
moment().format();

'use strict';

module.exports = function (datePublished) {
  return moment(datePublished).format('MMMM D, YYYY');
};
