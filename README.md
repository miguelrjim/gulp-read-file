## Install

```
$ npm install --save-dev gulp-read-file


## Usage

```js
var gulp = require('gulp');
var readFile = require('gulp-read-file');

gulp.task('default', function () {
	return gulp.src('src/file.ext', {read: false})
		.pipe(readFile())
		.pipe(gulp.dest('dist'));
});
```

## License

MIT © [Miguel Jimenez](https://github.com/miguelrjim)
