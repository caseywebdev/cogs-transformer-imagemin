const _ = require('underscore');
const imagemin = require('imagemin');

module.exports = ({buffer}, options, cb) => {
  try {
    imagemin.buffer(buffer, {
      plugins: _.map(options.plugins, (options, plugin) =>
        require(`imagemin-${plugin}`)(options)
      )
    }).then(buffer => cb(null, {buffer})).catch(cb);
  } catch (er) { cb(er); }
};
