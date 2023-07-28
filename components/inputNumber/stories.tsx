import type { Meta, StoryObj } from '@storybook/react'
import InputNumber from './index'

const meta: Meta = {
  title: 'Form/InputNumber',
  component: InputNumber,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    placeholder: 'Please Enter something',
  },
} satisfies Meta<typeof InputNumber>

export default meta

type Story = StoryObj<typeof InputNumber>

export const Base: Story = {
  args: {},
}
