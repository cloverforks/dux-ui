import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './index'
import Flex from '../flex'

const meta: Meta = {
  title: 'Elements/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['default', 'primary', 'secondary', 'info', 'warn', 'danger', 'success'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof Avatar>

export const Base: Story = {
  args: { children: 'Dux' },
}

export const Image: Story = {
  args: { children: 'Dux', src: 'https://i.pravatar.cc/300' },
}

export const Circle: Story = {
  args: { children: 'Dux', circle: true },
  render: (args) => (
    <Flex>
      <Avatar color='default' {...args}></Avatar>
    </Flex>
  ),
}

export const Colors: Story = {
  args: { children: 'Dux' },
  render: (args) => (
    <Flex>
      <Avatar color='default' {...args}></Avatar>
      <Avatar color='primary' {...args}></Avatar>
      <Avatar color='secondary' {...args}></Avatar>
      <Avatar color='success' {...args}></Avatar>
      <Avatar color='warn' {...args}></Avatar>
      <Avatar color='danger' {...args}></Avatar>
      <Avatar color='info' {...args}></Avatar>
    </Flex>
  ),
}
