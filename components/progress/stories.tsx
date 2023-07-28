import type { Meta, StoryObj } from '@storybook/react'

import Progress from './index'
import Flex from '../flex'

const meta: Meta = {
  title: 'Elements/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'info', 'warn', 'danger', 'success', 'gradual'],
      control: { type: 'select' },
    },
  },
  args: {
    value: 30,
  },
} satisfies Meta<typeof Progress>

export default meta

type Story = StoryObj<typeof Progress>

export const Base: Story = {
  args: {},
}

export const Label: Story = {
  args: {},
  render: (args) => (
    <Flex className='flex-col'>
      <Progress {...args} label />
      <Progress {...args} label={300} info=' unit' total={1000} />
    </Flex>
  ),
}

export const Info: Story = {
  args: {
    info: '%',
  },
}

export const Circle: Story = {
  args: {
    label: true,
    type: 'circle',
    size: 100,
  },
}

export const Bar: Story = {
  args: {
    label: true,
    type: 'bar',
  },
  render: (args) => (
    <Flex className='h-50'>
      <Progress {...args} value={20} color='primary' />
      <Progress {...args} value={30} color='secondary' />
      <Progress {...args} value={40} color='info' />
      <Progress {...args} value={50} color='warn' />
      <Progress {...args} value={60} color='danger' />
      <Progress {...args} value={70} color='success' />
      <Progress {...args} value={80} color='gradual' />
    </Flex>
  ),
}
