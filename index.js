const imagemin = require('imagemin');

module.exports = ({buffer}, options, cb) => {
  try {
    imagemin.buffer(buffer, options)
      .then(buffer => cb(null, {buffer}))
      .catch(cb);
  } catch (er) { cb(er); }
};
