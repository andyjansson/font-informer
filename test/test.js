var path = require('path');
var informer = require('../');
var assert = require('assert');

describe('font-informer', function () {
	it('can parse .ttf files', function (done) {
		informer(path.join(__dirname, 'fonts/pathFont.ttf')).then(function(result) {
			assert.deepEqual(result, require('./expected.ttf.json'));
			done();
		});
	});
	it('can parse .woff files', function (done) {
		informer(path.join(__dirname, 'fonts/pathFont.woff')).then(function(result) {
			assert.deepEqual(result, require('./expected.woff.json'));
			done();
		});
	});
	it('can parse .eot files', function (done) {
		informer(path.join(__dirname, 'fonts/pathFont.eot')).then(function(result) {
			assert.deepEqual(result, require('./expected.eot.json'));
			done();
		});
	});
	it('can parse .svg files', function (done) {
		informer(path.join(__dirname, 'fonts/pathFont.svg')).then(function(result) {
			assert.deepEqual(result, require('./expected.svg.json'));
			done();
		});
	});
});