import type { Meta, StoryObj } from '@storybook/react'

import Timeline from './index'
import Label from '../label'

const meta: Meta = {
  title: 'Show/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Timeline>

export default meta

type Story = StoryObj<typeof Timeline>

export const Base: Story = {
  args: {
    value: 1,
  },
  render: (args) => (
    <Timeline {...args}>
      <Timeline.Item desc='2023-01-01'>The first milestone</Timeline.Item>
      <Timeline.Item desc='2023-01-02'>The second milestone</Timeline.Item>
      <Timeline.Item desc='2023-01-03'>The third milestone</Timeline.Item>
    </Timeline>
  ),
}

export const Expand: Story = {
  args: {
    value: 1,
  },
  render: (args) => (
    <Timeline {...args}>
      <Timeline.Item desc='2023-01-01'>The first milestone</Timeline.Item>
      <Timeline.Item
        desc='2023-01-02'
        extra={
          <Label className='-mt-2' size='sm' color='success'>
            Complete
          </Label>
        }
      >
        The second milestone
      </Timeline.Item>
      <Timeline.Item desc='2023-01-03'>The third milestone</Timeline.Item>
    </Timeline>
  ),
}
