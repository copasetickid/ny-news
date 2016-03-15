'use strict';

module.exports = function (image) {
  var timesURL = 'http://static01.nyt.com/',
      imageContent = image.types[0].content;

    return timesURL + imageContent;
};
