import type { Meta, StoryObj } from '@storybook/react'

import Toast, { ToastItem } from './index'
import Button from '../button'
import Flex from '../flex'

const meta: Meta = {
  title: 'Feedback/Toast',
  component: ToastItem,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['success', 'error', 'warn', 'info'],
      control: { type: 'select' },
    },
  },
  args: {},
} satisfies Meta<typeof ToastItem>

export default meta

type Story = StoryObj<typeof ToastItem>

export const Notice: Story = {
  args: {
    title: 'Successfully saved!',
    desc: 'Anyone with a link can now view this file.',
    duration: 5000,
  },
  render: (args) => (
    <Button
      color='default'
      onClick={() => {
        Toast.notice({
          ...args,
        })
      }}
    >
      Open
    </Button>
  ),
}

export const Type: Story = {
  render: (args) => (
    <Flex>
      <Button
        color='info'
        onClick={() => {
          Toast.notice({
            ...args,
            type: 'info',
            title: 'Successfully saved!',
            desc: 'Anyone with a link can now view this file.',
          })
        }}
      >
        Info
      </Button>
      <Button
        color='success'
        onClick={() => {
          Toast.notice({
            ...args,
            type: 'success',
            title: 'Successfully saved!',
            desc: 'Anyone with a link can now view this file.',
          })
        }}
      >
        Success
      </Button>
      <Button
        color='warn'
        onClick={() => {
          Toast.notice({
            ...args,
            type: 'warn',
            title: 'Successfully saved!',
            desc: 'Anyone with a link can now view this file.',
          })
        }}
      >
        Warn
      </Button>
      <Button
        color='danger'
        onClick={() => {
          Toast.notice({
            ...args,
            type: 'error',
            title: 'Successfully saved!',
            desc: 'Anyone with a link can now view this file.',
          })
        }}
      >
        Danger
      </Button>
    </Flex>
  ),
}

export const Message: Story = {
  render: (args) => (
    <Button
      color='default'
      onClick={() => {
        Toast.message({
          ...args,
          type: 'success',
          title: 'Successfully saved!',
        })
      }}
    >
      Open
    </Button>
  ),
}

export const Confirm: Story = {
  args: {},
  render: (args) => (
    <Button
      color='default'
      onClick={() => {
        Toast.notice({
          ...args,
          title: 'Successfully saved!',
          desc: 'Anyone with a link can now view this file.',
          confirm: () => {
            alert('alert')
          },
        })
      }}
    >
      Open
    </Button>
  ),
}
