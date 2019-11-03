module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        }    
      }        
    ]
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
};
  