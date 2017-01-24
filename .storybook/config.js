import { configure } from '@kadira/storybook';

function loadStories() {
  // You can require as many stories as you need.
  require('../src/Tabs/story.js');
  require('../src/Switch/story.js');
}

configure(loadStories, module);
