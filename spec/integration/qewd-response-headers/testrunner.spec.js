'use strict';

var request = require('supertest')('http://localhost:8080');
var utils = require('../utils');

describe('integration/ewd-qoper8-express/qewd-response-headers:', function () {
  var cp;

  beforeAll(function (done) {
    cp = utils.fork(require.resolve('./server'), done);
  });

  afterAll(function (done) {
    utils.exit(cp, done);
  });

  it('should set response headers', function (done) {
    request.
      get('/qoper8/rest-message').
      expect(200).
      expect('x-foo', 'bar').
      expect('x-quux', 'baz').
      expect(function (res) {
        var body = res.body;
        expect(body).toEqual({});
      }).
      end(function (err) {
        return err ? done.fail(err) : done();
      });
  });
});
