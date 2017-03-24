module.exports = {
  styleLoader: require('extract-text-webpack-plugin').extract('style-loader', 'css-loader!sass-loader'),

  styles: {
    "mixins": true,

    "path": true,
    "core": true,
    "larger": true,
    "fixed-width": true,
    "list": true,
    "bordered-pulled": true,
    "animated": true,
    "rotated-flipped": true,
    "stacked": true,
    "icons": true,
    "screen-reader": true,
  },
};
