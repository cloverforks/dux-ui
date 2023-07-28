import type { Meta, StoryObj } from '@storybook/react'

import Label from './index'
import Flex from '../flex'
import Button from '../button'

const meta: Meta = {
  title: 'Elements/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['default', 'primary', 'secondary', 'info', 'warn', 'danger', 'success'],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'sm', 'xs'],
      control: { type: 'select' },
    },
    ping: { control: 'boolean', if: { arg: 'dot' } },
  },
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof Label>

export const Base: Story = {
  args: {
    children: 'Label',
  },
}

export const Color: Story = {
  args: {},
  render: (args) => (
    <Flex>
      <Label color='default' {...args}>
        Default
      </Label>
      <Label color='primary' {...args}>
        Primary
      </Label>
      <Label color='secondary' {...args}>
        Secondary
      </Label>
      <Label color='success' {...args}>
        Success
      </Label>
      <Label color='warn' {...args}>
        Warn
      </Label>
      <Label color='danger' {...args}>
        Danger
      </Label>
      <Label color='info' {...args}>
        Info
      </Label>
    </Flex>
  ),
}

export const Size: Story = {
  args: {
    children: 'Label',
    color: 'danger',
  },
  render: (args) => (
    <Flex className='items-center'>
      <Label {...args} size='default'></Label>
      <Label {...args} size='sm'></Label>
      <Label {...args} size='xs'></Label>
    </Flex>
  ),
}

export const Image: Story = {
  args: {
    image: 'https://i.pravatar.cc/300',
    children: 'Label',
    color: 'success',
  },
}

export const Dot: Story = {
  args: {
    dot: true,
    color: 'secondary',
  },
  render: (args) => (
    <Flex className='items-center'>
      <Label {...args}>Label</Label>
      <Label ping {...args}>
        Label
      </Label>
    </Flex>
  ),
}

export const Icon: Story = {
  args: {
    icon: 'i-tabler:home',
    color: 'primary',
    children: 'label',
  },
}

export const Extra: Story = {
  args: {
    extra: <Button icon='i-tabler:x' pill size='xs' type='text' color='info' />,
    color: 'info',
    children: 'label',
  },
}
