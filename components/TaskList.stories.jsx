import React from 'react';
import { TaskList } from './TaskList';
import { Default as TaskStory } from './Task.stories'; // Ensure this path is correct
import { View } from 'react-native';

export default {
  title: 'TaskList',
  component: TaskList,
  decorators: [
    (Story) => (
      <View style={{ padding: 42, flex: 1 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    onPinTask: { action: 'onPinTask' },
    onArchiveTask: { action: 'onArchiveTask' },
  },
};

const Template = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { ...TaskStory.args.task, id: '1', title: 'Task 1' },
    { ...TaskStory.args.task, id: '2', title: 'Task 2' },
    { ...TaskStory.args.task, id: '3', title: 'Task 3' },
    { ...TaskStory.args.task, id: '4', title: 'Task 4' },
    { ...TaskStory.args.task, id: '5', title: 'Task 5' },
    { ...TaskStory.args.task, id: '6', title: 'Task 6' },
  ],
  loading: false,
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  tasks: [],
  loading: false,
};
