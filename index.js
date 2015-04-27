'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var fs = require('fs');

function readFile(options) {

	return through.obj(
		function (file, enc, cb) {
			// Just push the file if its not null
			if(!file.isNull()) {
				this.push(file);
				cb();
				return;
			}
			var that = this;
			// Read the file and set its contents
			fs.readFile(file.path, function(err, data) {
				file.contents = data;
				that.push(file);
				cb();
			})
		}
	);
};
module.exports = readFile;
