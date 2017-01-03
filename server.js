import webpack from 'webpack';
import config from './webpack.config';
import WebPackDevServer from 'webpack-dev-server';

const server = new WebPackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  noInfo: false,

  stats: {
    colors: true,
    hash: false,
    version: false,
    timings: true,
    assets: false,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    publicPath: false
  }
});

server.listen(8080, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log(`Listening at localhost:8080`);
});
