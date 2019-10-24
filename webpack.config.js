const path = require('path');

module.exports = {
  entry: {
    main: path.join(__dirname, 'src/index.js'),
    'outdated-browser-rework': path.join(__dirname, 'src/outdated-browser-rework.js')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};
