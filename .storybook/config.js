import { configure } from '@storybook/react';

function loadStories() {
  require('../app/javascript/stories');
}

configure(loadStories, module);
