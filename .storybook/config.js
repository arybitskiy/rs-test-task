import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/StageCard');
}

configure(loadStories, module);
