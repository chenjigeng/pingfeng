var http = require('http');

var express = require('express');
var app = express();

app.use(require('morgan')('short'));
app.use(require('connect-history-api-fallback')())

// ************************************
// This is the real meat of the example
// ************************************

// Step 1: Create & configure a webpack compiler
var webpack = require('webpack');
var webpackConfig = require('./webpack.dev');
var compiler = webpack(webpackConfig);

// Step 2: Attach the dev middleware to the compiler & the server
app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true, 
  publicPath: webpackConfig.output.publicPath,
  reload: true,
  stats: { colors: true }
}));
var hotMiddleware = require("webpack-hot-middleware")(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
});

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})
// Step 3: Attach the hot middleware to the compiler & the server
app.use(hotMiddleware);

// Do anything you like with the rest of your express application.
var server = http.createServer(app);
server.listen(process.env.PORT || 8000, function() {
  console.log("Listening on %j", server.address());
});
