const rootMain = require('../../../.storybook/main');

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.stories.push(
  ...['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)']
);

module.exports = rootMain;
