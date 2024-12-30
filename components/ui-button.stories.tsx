import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { UIButton } from './ui-button';  // Adjust the import path as needed

export default {
  title: 'UIButton',
  component: UIButton,
} as Meta<typeof UIButton>;

const Template: StoryFn<typeof UIButton> = (args) => <UIButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Login',
};
