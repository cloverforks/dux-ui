import type { Meta, StoryObj } from '@storybook/react'

import Panel from './index'
import Button from '../button'

const meta: Meta = {
  title: 'Show/Panel',
  component: Panel,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    title: 'Title',
  },
} satisfies Meta<typeof Panel>

export default meta

type Story = StoryObj<typeof Panel>

export const Base: Story = {
  render: (args) => (
    <Panel {...args}>
      <div className='p-4'>Content</div>
    </Panel>
  ),
}

export const Expand: Story = {
  render: (args) => (
    <Panel
      {...args}
      extra={<Button aria-label='extra' pill type='text' size='sm' icon='i-tabler:clipboard' />}
    >
      <div className='p-4'>Content</div>
    </Panel>
  ),
}
