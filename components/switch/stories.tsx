import type { Meta, StoryObj } from '@storybook/react'
import Swtich from './index'

const meta: Meta = {
  title: 'Form/Swtich',
  component: Swtich,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Swtich>

export default meta

type Story = StoryObj<typeof Swtich>

export const Base: Story = {
  args: {},
}
