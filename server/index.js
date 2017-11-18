const Koa = require('koa');
const app = new Koa();
const webpack = require('webpack');
const koaWebpackMiddleware = require('koa-webpack-middleware');
const devMiddleware = koaWebpackMiddleware.devMiddleware;
const hotMiddleware = koaWebpackMiddleware.hotMiddleware;
const devConfig = require('../webpack.dev');
const compile = webpack(devConfig)
const serve = require('koa-static');

app.use(devMiddleware(compile, {
  // display no info to console (only warnings and errors) 
  noInfo: false,

  // display nothing to the console 
  quiet: false,

  // switch into lazy mode 
  // that means no watching, but recompilation on every request 
  lazy: true,

  // watch options (only lazy: false) 
  watchOptions: {
      aggregateTimeout: 300,
      poll: true
  },

  // public path to bind the middleware to 
  // use the same as in webpack 
  publicPath: devConfig.output.publicPath,

  // custom headers 
  headers: { "X-Custom-Header": "yes" },

  // options for formating the statistics 
  stats: {
      colors: true
  }
}))
app.use(hotMiddleware(compile, {
  log: console.log, 
  path: '/__webpack_hmr', 
  heartbeat: 10 * 1000 
}))

app.use(serve(__dirname, {extensions: ['html']}));

app.listen(8000, () => {
  console.log('listen in 8000');
});

