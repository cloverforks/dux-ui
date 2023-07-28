import type { Meta, StoryObj } from '@storybook/react'

import Modal from './index'
import Button from '../button'

const meta: Meta = {
  title: 'Feedback/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      type: 'function',
    },
  },
  args: {
    title: 'Title',
    desc: 'Descriptions',
  },
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof Modal>

export const Base: Story = {
  args: {
    trigger: (
      <Button color='primary' pill={true}>
        Open
      </Button>
    ),
  },
  render: (args) => <Modal {...args}>Here the demo text</Modal>,
}

export const Async: Story = {
  args: {
    ...Base.args,
  },
  render: (args) => <Modal {...args} component={() => import('./demo')} />,
}

export const Function: Story = {
  render: (args) => (
    <Button
      color='primary'
      pill={true}
      onClick={() => {
        Modal.create({
          ...args,
          component: () => import('./demo'),
        })
      }}
    >
      Open
    </Button>
  ),
}
