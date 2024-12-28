import React from 'react';
import { LoadingButton } from './LoadingButton'; // Adjust the path if needed

export default {
  title: 'Widgets', // Main category in Storybook
  component: LoadingButton,
  parameters: {
    docs: {
      description: {
        component: `
### UIButton:
- **Behavior**: 
  - Shows a loading spinner when clicked.
  - Prevents further clicks while in the loading state.
- **Functionality**:
  - Can simulate actions like logging in or creating an account.
  - Accepts props for customizable button and loading text.
        `,
      },
    },
  },
};

export const UIButton = () => (
  <LoadingButton buttonText="Login" loadingText="Loading..." />
);
UIButton.storyName = 'UIButton'; // Renamed to "UIButton"
UIButton.parameters = {
  docs: {
    description: {
      story: `
This story demonstrates a UIButton that:
- Displays a spinner during loading.
- Prevents multiple clicks while loading.
- Can be used for tasks like login or signup.
      `,
    },
  },
};
