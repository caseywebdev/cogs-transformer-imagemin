var helper = require('cogs-test-helper');

helper.run({
  'test/config.json': {
    'test/input.svg': helper.getFileBuffer('test/output.svg'),
    'test/error.png': Error
  },
  'test/error-config.json': {
    'test/input.svg': Error
  }
});
