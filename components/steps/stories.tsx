import type { Meta, StoryObj } from '@storybook/react'

import Steps from './index'

const meta: Meta = {
  title: 'Show/Steps',
  component: Steps,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
  args: {},
} satisfies Meta<typeof Steps>

export default meta

type Story = StoryObj<typeof Steps>

export const Base: Story = {
  args: {},
  render: (args) => (
    <Steps {...args}>
      <Steps.Item title='Step 1' />
      <Steps.Item title='Step 2' />
      <Steps.Item title='Step 3' />
    </Steps>
  ),
}

export const Descriptions: Story = {
  render: (args) => (
    <Steps {...args}>
      <Steps.Item title='Step 1'>This is a description</Steps.Item>
      <Steps.Item title='Step 2'>This is a description</Steps.Item>
    </Steps>
  ),
}

export const Values: Story = {
  args: {
    value: 'delivery',
  },
  render: (args) => (
    <Steps {...args}>
      <Steps.Item title='Step 1' value='pay' />
      <Steps.Item title='Step 2' value='delivery' />
      <Steps.Item title='Step 3' value='complete' />
    </Steps>
  ),
}

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    value: 1,
  },
  render: (args) => (
    <Steps {...args}>
      <Steps.Item title='Step 1'>This is a description</Steps.Item>
      <Steps.Item title='Step 2'>This is a description</Steps.Item>
      <Steps.Item title='Step 3'>This is a description</Steps.Item>
    </Steps>
  ),
}
