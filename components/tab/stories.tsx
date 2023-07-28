import type { Meta, StoryObj } from '@storybook/react'

import Tabs from './index'

const meta: Meta = {
  title: 'Show/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof Tabs>

export const Base: Story = {
  args: {},
  render: (args) => (
    <Tabs {...args}>
      <Tabs.Item label='Tab 1'>Tab Content 1</Tabs.Item>
      <Tabs.Item label='Tab 2'>Tab Content 2</Tabs.Item>
      <Tabs.Item label='Tab 3'>Tab Content 3</Tabs.Item>
      <Tabs.Item label='Tab 4'>Tab Content 4</Tabs.Item>
    </Tabs>
  ),
}
