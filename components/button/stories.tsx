import type { Meta, StoryObj } from '@storybook/react'

import Button from './index'
import Flex from '../flex'

const meta: Meta = {
  title: 'Elements/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['default', 'primary', 'secondary', 'info', 'warn', 'danger', 'success'],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'xs', 'sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    type: {
      options: ['default', 'outline', 'text'],
      control: { type: 'inline-radio' },
    },
    htmlType: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'inline-radio' },
    },
    className: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>

export const Base: Story = {
  args: {
    children: 'Button',
  },
}

export const Default: Story = {
  args: {
    type: 'default',
  },
  render: (args) => (
    <Flex>
      <Button color='default' {...args}>
        default
      </Button>
      <Button color='primary' {...args}>
        primary
      </Button>
      <Button color='secondary' {...args}>
        secondary
      </Button>
      <Button color='success' {...args}>
        success
      </Button>
      <Button color='warn' {...args}>
        warn
      </Button>
      <Button color='danger' {...args}>
        danger
      </Button>
      <Button color='info' {...args}>
        info
      </Button>
      <Button color='default' {...args} disabled>
        disabled
      </Button>
      <Button color='primary' {...args} disabled>
        disabled
      </Button>
    </Flex>
  ),
}

export const Outline: Story = {
  args: {
    type: 'outline',
  },
  render: (args) => (
    <Flex>
      <Button color='default' {...args}>
        default
      </Button>
      <Button color='primary' {...args}>
        primary
      </Button>
      <Button color='secondary' {...args}>
        secondary
      </Button>
      <Button color='success' {...args}>
        success
      </Button>
      <Button color='warn' {...args}>
        warn
      </Button>
      <Button color='danger' {...args}>
        danger
      </Button>
      <Button color='info' {...args}>
        info
      </Button>
      <Button color='default' {...args} disabled>
        disabled
      </Button>
      <Button color='primary' {...args} disabled>
        disabled
      </Button>
    </Flex>
  ),
}

export const Text: Story = {
  args: {
    type: 'text',
  },
  render: (args) => (
    <Flex>
      <Button color='default' {...args}>
        default
      </Button>
      <Button color='primary' {...args}>
        primary
      </Button>
      <Button color='secondary' {...args}>
        secondary
      </Button>
      <Button color='success' {...args}>
        success
      </Button>
      <Button color='warn' {...args}>
        warn
      </Button>
      <Button color='danger' {...args}>
        danger
      </Button>
      <Button color='info' {...args}>
        info
      </Button>
      <Button color='default' {...args} disabled>
        disabled
      </Button>
      <Button color='primary' {...args} disabled>
        disabled
      </Button>
    </Flex>
  ),
}

export const Size: Story = {
  args: {
    color: 'primary',
  },
  render: (args) => (
    <Flex className='items-center'>
      <Button {...args} icon='i-tabler:home' size='lg'>
        Button
      </Button>
      <Button {...args} icon='i-tabler:home' size='default'>
        Button
      </Button>
      <Button {...args} icon='i-tabler:home' size='sm'>
        Button
      </Button>
      <Button {...args} icon='i-tabler:home' size='xs'>
        Button
      </Button>
    </Flex>
  ),
}

export const Icon: Story = {
  args: {
    color: 'secondary',
  },
  render: (args) => (
    <Flex className='items-center'>
      <Button {...args} icon='i-tabler:home' size='lg'></Button>
      <Button {...args} icon='i-tabler:home' size='default'></Button>
      <Button {...args} icon='i-tabler:home' size='sm'></Button>
      <Button {...args} icon='i-tabler:home' size='xs'></Button>
    </Flex>
  ),
}

export const Pill: Story = {
  args: {
    color: 'info',
    pill: true,
  },
  render: (args) => (
    <Flex>
      <Button {...args} icon='i-tabler:home' />
      <Button {...args} pill>
        Button
      </Button>
    </Flex>
  ),
}

export const Loading: Story = {
  args: {
    color: 'success',
  },
  render: (args) => (
    <Flex>
      <Button {...args} loading>
        Loading
      </Button>
    </Flex>
  ),
}
