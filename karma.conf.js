module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: ['Chrome'],
    frameworks: ['jasmine', 'closure'],
    reporters: ['nested', 'html'],
    files: [
      'bower_components/angular/angular.js',
      // Compiled Product Code
      'build/client/taipan3k_scripts.js',
      {pattern: 'client/**/*_test.js'},
      // Uncompiled Product Code
      {pattern: 'client/**/*!(_test).js', included: false},
      // Closure Deps
      {pattern: 'lib/closure-library/closure/goog/deps.js', included: false, served: false},
      {pattern: 'lib/closure-library/closure/goog/**/*.js', included: false}
    ],

    preprocessors: {
      'lib/closure-library/closure/goog/deps.js': ['closure-deps']
    },

    autoWatch: true,
    singleRun: false
  });
};
