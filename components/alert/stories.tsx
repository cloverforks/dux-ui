import type { Meta, StoryObj } from '@storybook/react'

import Alert from './index'
import Flex from '../flex'
import Button from '../button'

const meta: Meta = {
  title: 'Show/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['info', 'warn', 'danger', 'success'],
      control: { type: 'select' },
    },
  },
  args: { children: 'Here is an example' },
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof Alert>

export const Base: Story = {}

export const Close: Story = {
  args: {
    close: true,
  },
}

export const Type: Story = {
  args: {},
  render: (args) => (
    <Flex className='flex-col'>
      <Alert type='info' {...args} />
      <Alert type='success' {...args} />
      <Alert type='warn' {...args} />
      <Alert type='danger' {...args} />
    </Flex>
  ),
}

export const Footer: Story = {
  args: {},
  render: (args) => (
    <Flex className='flex-col'>
      <Alert
        title='info'
        footer={
          <div className='flex gap-2'>
            <Alert.Close>
              <Button color='primary' type='outline' size='sm'>
                View
              </Button>
            </Alert.Close>
            <Alert.Close>
              <Button color='primary' type='outline' size='sm'>
                Dismiss
              </Button>
            </Alert.Close>
          </div>
        }
        {...args}
      />
    </Flex>
  ),
}
