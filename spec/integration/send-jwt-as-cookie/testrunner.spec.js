'use strict';

var request = require('supertest')('http://localhost:8080');
var utils = require('../utils');

describe('integration/ewd-qoper8-express/send-jwt-as-cookie:', function () {
  var cp;

  beforeAll(function (done) {
    cp = utils.fork(require.resolve('./server'), done);
  });

  afterAll(function (done) {
    utils.exit(cp, done);
  });

  it('should set cookie (basic)', function (done) {
    request.
      get('/qoper8/basic').
      expect(200).
      expect('set-cookie', 'JSESSIONID=foo.bar.baz; path=/').
      expect(function (res) {
        var body = res.body;
        expect(body).toEqual({});
      }).
      end(function (err) {
        return err ? done.fail(err) : done();
      });
  });

  it('should set cookie (custom name)', function (done) {
    request.
      get('/qoper8/custom-name').
      expect(200).
      expect('set-cookie', 'QUUX=foo.bar.baz; path=/').
      expect(function (res) {
        var body = res.body;
        expect(body).toEqual({});
      }).
      end(function (err) {
        return err ? done.fail(err) : done();
      });
  });

  it('should set cookie (directives)', function (done) {
    request.
      get('/qoper8/directives').
      expect(200).
      expect('set-cookie', 'JSESSIONID=foo.bar.baz; path=/xxx; HttpOnly').
      expect(function (res) {
        var body = res.body;
        expect(body).toEqual({});
      }).
      end(function (err) {
        return err ? done.fail(err) : done();
      });
  });
});
