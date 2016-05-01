var sorter = require('../../lib/index').transform;

var sorterProcessor = sorter({
  whitelist: ['app/**/*.js']
});


module.exports = function () {

  return {
    files: [
      { "pattern": "lib/angular.js", "instrument": false },
      { "pattern": "lib/angular-mocks.js", "instrument": false },

       "app/**/*.js"
    ],

    tests: [
      "test/*.spec.js"
    ],

    postprocessor: sorterProcessor,
    debug: true
  }
};
