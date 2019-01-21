'use strict';

module.exports = function () {

  this.on('message', function (messageObj, send, finished) {
    var results;

    if (messageObj.path === '/qoper8/rest-message') {
      /*jshint camelcase: false */
      results = {
        restMessage: true,
        qewd_response_headers: {
          'x-foo': 'bar',
          'x-quux': 'baz',
        }
      };
      /*jshint camelcase: true */

      return finished(results);
    }

    this.emit('unknownMessage', messageObj, send, finished);
  });

};
