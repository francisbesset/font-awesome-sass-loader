var styles = [
  'mixins',

  'path',
  'core',
  'larger',
  'fixed-width',
  'list',
  'bordered-pulled',
  'animated',
  'rotated-flipped',
  'stacked',
  'icons',
  'screen-reader',
];

module.exports = function (content) {
  this.cacheable(true);

  var config = this.exec(content, this.resourcePath);
  var start =
      "@import        \"~font-awesome/scss/variables\";\n"
    + "$fa-font-path: \"~font-awesome/fonts/\";\n";

  if (config.fontAwesomeCustomizations) {
    start += "@import \"" + config.fontAwesomeCustomizations + "\";\n";
  }

  source = start + styles.filter(function (style) {
    return config.styles[style];
  }).map(function (style) {
    return "@import \"~font-awesome/scss/" + style + "\";";
  }).join("\n");

  return source;
}
