import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { UIButton } from './ui-button';  // Adjust the import path as needed

export default {
  title: 'Widgets/UI-Button',  // Set this to the desired path
  component: UIButton,
} as Meta<typeof UIButton>;

const Template: StoryFn<typeof UIButton> = (args) => <UIButton {...args} />;

export const UI_Button = Template.bind({});
UI_Button.args = {
  buttonText: 'Login',
};
