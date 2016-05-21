var helper = require('cogs-test-helper');

helper.run({
  'test/config.json': {
    'test/input.svg': {
      path: 'test/input.svg',
      buffer: helper.getFileBuffer('test/output.svg'),
      hash: helper.getFileHash('test/output.svg'),
      requires: [{
        path: 'test/input.svg',
        hash: helper.getFileHash('test/input.svg')
      }],
      links: [],
      globs: []
    },
    'test/error.png': Error
  },
  'test/error-config.json': {
    'test/input.svg': Error
  }
});
