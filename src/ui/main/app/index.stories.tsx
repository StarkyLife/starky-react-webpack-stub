import { ComponentMeta, ComponentStory } from '@storybook/react';

import { App } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/App',
  component: App,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof App>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Intial = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Intial.args = {
  text: 'Hello World!',
};
