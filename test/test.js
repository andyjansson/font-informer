var path = require('path');
var informer = require('../');
var assert = require('assert');
var fs = require('fs');

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

	describe('parsing buffers', function() {
		it('can parse .ttf buffers', function(done) {
			var file = path.join(__dirname, 'fonts', 'pathFont.ttf');
			informer(fs.readFileSync(file)).then(function(result) {
				assert.deepEqual(result, require('./expected.ttf.json'));
				done();
			});
		});
		it('can parse .woff buffers', function(done) {
			var file = path.join(__dirname, 'fonts', 'pathFont.woff');
			informer(fs.readFileSync(file)).then(function(result) {
				assert.deepEqual(result, require('./expected.woff.json'));
				done();
			});
		});
		it('can parse .eot buffers', function(done) {
			var file = path.join(__dirname, 'fonts', 'pathFont.eot');
			informer(fs.readFileSync(file)).then(function(result) {
				assert.deepEqual(result, require('./expected.eot.json'));
				done();
			});
		});
		it('can parse .svg buffers', function(done) {
			var file = path.join(__dirname, 'fonts', 'pathFont.svg');
			informer(fs.readFileSync(file)).then(function(result) {
				assert.deepEqual(result, require('./expected.svg.json'));
				done();
			});
		});
	});
});