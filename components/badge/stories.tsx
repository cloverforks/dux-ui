import type { Meta, StoryObj } from '@storybook/react'

import Badge from './index'
import Flex from '../flex'
import Avatar from '../avatar'

const meta: Meta = {
  title: 'Elements/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'info', 'warn', 'danger', 'success'],
      control: { type: 'select' },
    },
    ping: { control: 'boolean', if: { arg: 'dot' } },
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof Badge>

export const Base: Story = {
  args: {
    text: 'Hot',
  },
  render: (args) => (
    <Flex>
      <Badge {...args}>
        <Avatar>D</Avatar>
      </Badge>
    </Flex>
  ),
}

export const Circle: Story = {
  args: {
    circle: true,
    dot: true,
  },
  render: (args) => (
    <Flex>
      <Badge {...args}>
        <Avatar circle>D</Avatar>
      </Badge>
    </Flex>
  ),
}

export const Color: Story = {
  args: {
    dot: true,
  },
  render: (args) => (
    <Flex>
      <Badge color='primary' {...args}>
        <Avatar>D</Avatar>
      </Badge>
      <Badge color='secondary' {...args}>
        <Avatar>D</Avatar>
      </Badge>
      <Badge color='success' {...args}>
        <Avatar>D</Avatar>
      </Badge>
      <Badge color='warn' {...args}>
        <Avatar>D</Avatar>
      </Badge>
      <Badge color='danger' {...args}>
        <Avatar>D</Avatar>
      </Badge>
      <Badge color='info' {...args}>
        <Avatar>D</Avatar>
      </Badge>
    </Flex>
  ),
}

export const Dot: Story = {
  args: {
    dot: true,
  },
  render: (args) => (
    <Flex>
      <Badge {...args}>
        <Avatar>D</Avatar>
      </Badge>
      <Badge ping {...args}>
        <Avatar>D</Avatar>
      </Badge>
    </Flex>
  ),
}
