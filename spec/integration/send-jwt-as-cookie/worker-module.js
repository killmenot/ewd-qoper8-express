'use strict';

module.exports = function () {

  this.on('message', function (messageObj, send, finished) {
    var results;

    if (messageObj.path === '/qoper8/basic') {
      /*jshint camelcase: false */
      results = {
        restMessage: true,
        qewd_send_jwt_as_cookie: true,
        token: 'foo.bar.baz'
      };
      /*jshint camelcase: true */

      return finished(results);
    }

    if (messageObj.path === '/qoper8/custom-name') {
      /*jshint camelcase: false */
      results = {
        restMessage: true,
        qewd_send_jwt_as_cookie: {
          name: 'QUUX'
        },
        token: 'foo.bar.baz'
      };
      /*jshint camelcase: true */

      return finished(results);
    }

    if (messageObj.path === '/qoper8/directives') {
      /*jshint camelcase: false */
      results = {
        restMessage: true,
        qewd_send_jwt_as_cookie: {
          directives: [
           'path=/xxx',
           'HttpOnly'
          ]
        },
        token: 'foo.bar.baz'
      };
      /*jshint camelcase: true */

      return finished(results);
    }

    this.emit('unknownMessage', messageObj, send, finished);
  });

};
