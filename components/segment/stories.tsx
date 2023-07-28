import type { Meta, StoryObj } from '@storybook/react'
import Segment from './index'

const meta: Meta = {
  title: 'Show/Segment',
  component: Segment,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Segment>

export default meta

type Story = StoryObj<typeof Segment>

export const Base: Story = {
  args: {},
  render: (args) => (
    <Segment {...args}>
      <Segment.Item label='Label 1' value='0' />
      <Segment.Item label='Label 2' value='1' />
      <Segment.Item label='Label 3' value='2' />
      <Segment.Item label='Label 4' value='3' />
    </Segment>
  ),
}
