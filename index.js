const _ = require('underscore');
const imagemin = require('imagemin');

module.exports = ({file: {buffer}, options}) =>
  imagemin.buffer(buffer, {
    plugins: _.map(options.plugins, (options, plugin) =>
      require(`imagemin-${plugin}`)(options)
    )
  }).then(buffer => ({buffer}));
