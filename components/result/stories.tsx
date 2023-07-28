import type { Meta, StoryObj } from '@storybook/react'
import Result from './index'
import Button from '../button'

const meta: Meta = {
  title: 'Feedback/Result',
  component: Result,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['info', 'success', 'warn', 'error', 'text'],
      control: { type: 'select' },
    },
  },
  args: {
    title: 'Title',
    desc: 'Descriptions',
  },
} satisfies Meta<typeof Result>

export default meta

type Story = StoryObj<typeof Result>

export const Base: Story = {
  args: {
    type: 'info',
  },
  render: (args) => (
    <Result
      {...args}
      footer={
        <>
          <Button color='default'>Back</Button>
          <Button color='primary'>Agree</Button>
        </>
      }
    />
  ),
}

export const Stats: Story = {
  args: {
    type: 'text',
    state: 404,
  },
  render: (args) => (
    <Result
      {...args}
      footer={
        <>
          <Button color='default'>Back</Button>
          <Button color='primary'>Agree</Button>
        </>
      }
    />
  ),
}
