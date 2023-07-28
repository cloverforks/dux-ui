import type { Meta, StoryObj } from '@storybook/react'
import Slider from './index'

const meta: Meta = {
  title: 'Form/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof Slider>

export const Base: Story = {
  args: {
    defaultValue: 10,
  },
}
