import { configure, getStorybook } from '@storybook/react';

const components = require.context('../core/components', true, /story\.js$/);

// automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  components.keys().forEach(components);
}

configure(loadStories, module);
export { getStorybook }
