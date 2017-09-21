var webpackConfig = require('./webpack.config.js');

module.exports = function(config){
  config.set({
      browsers: ['Chrome'],
      singleRun: true,
      frameworks: ['mocha'],
      files: ['app/tests/**/*.test.jsx'],
      preprocessors: {
        'app/tests/**/*.test.jsx': ['webpack', 'source-map']
      },
      reporters: ['mocha'],
      client: {
        mocha:{
          timeout: '9000'
        }
      },
      webpack:webpackConfig,
      webpackServer:{
        noInfo: true
      }
  });
};
