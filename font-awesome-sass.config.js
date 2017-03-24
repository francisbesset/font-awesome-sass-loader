module.exports = {
  // Default for the style loading
  //styleLoader: "style-loader!css-loader!sass-loader",

  // If you want to use the ExtractTextPlugin
  //styleLoader: require('extract-text-webpack-plugin').extract('style-loader', 'css-loader!sass-loader'),

  // Use fontAwesomeCustomizations to utilize other sass variables defined in
  // _variables.scss file. This is useful to set one customization value based
  // on another value.
  //fontAwesomeCustomizations: "./_font-awesome.config.scss",

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
  },
};
