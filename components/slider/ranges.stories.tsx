import type { Meta, StoryObj } from '@storybook/react'
import SliderRange from './ranges'

const meta: Meta = {
  title: 'Form/Slider/Range',
  component: SliderRange,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof SliderRange>

export default meta

type Story = StoryObj<typeof SliderRange>

export const Base: Story = {
  args: {
    defaultValue: [0, 10],
  },
}
