import type { Meta, StoryObj } from '@storybook/react'

import Empty from './index'
import Button from '../button'

const meta: Meta = {
  title: 'Show/Empty',
  component: Empty,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
  args: {
    title: 'Empty Data',
    desc: 'You can try creating or refreshing',
  },
  render: (args) => (
    <div className='bg-white dark:bg-black-dark'>
      <Empty {...args} />
    </div>
  ),
} satisfies Meta<typeof Empty>

export default meta

type Story = StoryObj<typeof Empty>

export const Base: Story = {
  args: {},
}

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
  },
}

export const Expand: Story = {
  args: {
    direction: 'horizontal',
    children: <Button color='primary'>Refresh</Button>,
  },
}
