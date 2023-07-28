import type { Meta, StoryObj } from '@storybook/react'

import Loading from './index'
import Flex from '../flex'

const meta: Meta = {
  title: 'Elements/Loading/Loading',
  component: Loading,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['default', 'primary', 'secondary', 'info', 'warn', 'danger', 'success', 'white'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Loading>

export default meta

type Story = StoryObj<typeof Loading>

export const Base: Story = {
  args: {},
}

export const Color: Story = {
  args: {},
  render: (args) => (
    <Flex>
      <Loading color='default' {...args} />
      <Loading color='primary' {...args} />
      <Loading color='secondary' {...args} />
      <Loading color='success' {...args} />
      <Loading color='warn' {...args} />
      <Loading color='danger' {...args} />
      <Loading color='info' {...args} />
    </Flex>
  ),
}
