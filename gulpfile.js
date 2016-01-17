var gulp = require('gulp');

try {
  var closureCompiler = require('gulp-closure-compiler');
  var minifyHtml = require('gulp-minify-html');
  var ngHtml2Js = require('gulp-ng-html2js');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');
  var flatten = require('gulp-flatten');
} catch (e) {
  console.log(e.stack);
  console.error('Required module not found. Please re-run "npm install".');
  process.exit(1);
}


var jsSourceFiles = [
      'client/**/*.js', '!client/**/*_test.js', '!client/karma.conf.js',
      'lib/closure-library/closure/goog/**/*.js',
      '!lib/closure-library/closure/goog/**/*_test.js'];

gulp.task('default', ['prod']);

gulp.task('third_party', function() {});

gulp.task('common', ['third_party'], function() {
  gulp.src('client/**/*.json')
    .pipe(gulp.dest('build/client'));

  gulp.src('client/**/*.css')
    .pipe(concat('perfkit_styles.css'))
    .pipe(gulp.dest('build'));
});

gulp.task('test', ['common'], function() {

  gulp.src(jsSourceFiles)
    .pipe(closureCompiler({
      compilerPath: 'bin/closure-compiler.jar',
      fileName: 'taipan3k_scripts.js',
      compilerFlags: {
        angular_pass: true,
        compilation_level: 'SIMPLE_OPTIMIZATIONS',
        language_in: 'ECMASCRIPT6',
        language_out: 'ECMASCRIPT5',
        formatting: 'PRETTY_PRINT',
        warning_level: 'VERBOSE',
        manage_closure_dependencies: true,
        only_closure_dependencies: true,
        process_closure_primitives: true,
        closure_entry_point: 'taipan3k.application.module'
      }
    }))
    .pipe(gulp.dest('build/client'));

  gulp.src('client/**/*.html')
    .pipe(ngHtml2Js({
        moduleName: 'taipan3k.templates'
    }))
    .pipe(concat('taipan3k_templates.js'))
    .pipe(gulp.dest('build/client'));
});


gulp.task('prod', ['common'], function() {

  gulp.src(jsSourceFiles)
    .pipe(closureCompiler({
      compilerPath: 'node_modules/google-closure-compiler/compiler.jar',
      fileName: 'taipan3k_scripts.js',
      compilerFlags: {
        angular_pass: true,
        compilation_level: 'SIMPLE_OPTIMIZATIONS',
        language_in: 'ECMASCRIPT6',
        language_out: 'ECMASCRIPT5_STRICT',
        formatting: 'PRETTY_PRINT',
        warning_level: 'VERBOSE',
        externs: [
          'node_modules/google-closure-compiler/contrib/externs/angular-1.4.js',
          'node_modules/google-closure-compiler/contrib/externs/angular-1.4-http-promise_templated.js',
          'node_modules/google-closure-compiler/contrib/externs/angular-1.4-q_templated.js'
        ],
        manage_closure_dependencies: true,
        only_closure_dependencies: true,
        process_closure_primitives: true,
        closure_entry_point: 'taipan3k.application.module'
      }
    }))
    .pipe(flatten())
    .pipe(gulp.dest('build/client'));

  gulp.src('client/**/*.html')
    .pipe(minifyHtml({
        empty: true,
        spare: true,
        quotes: true
    }))
    .pipe(ngHtml2Js({
        moduleName: 'taipan3k.templates'
    }))
    .pipe(concat('taipan3k_templates.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/client'));
});
