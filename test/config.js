module.exports = {
  pipe: {
    name: '.',
    options: {plugins: [require('imagemin-svgo')()]}
  }
};
