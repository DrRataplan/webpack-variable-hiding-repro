const webpack = require('webpack');

webpack({ mode: 'development', devtool: 'none' }, (error) => {
  if (error) {
    console.error(error);
    return;
  }
});
