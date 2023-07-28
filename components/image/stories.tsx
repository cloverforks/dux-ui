import type { Meta, StoryObj } from '@storybook/react'

import Image from './index'

const meta: Meta = {
  title: 'Elements/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Image>

export default meta

type Story = StoryObj<typeof Image>

export const Base: Story = {
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'description',
  },
}

export const Size: Story = {
  args: {
    ...Base.args,
    width: 100,
    height: 100,
  },
}

export const Title: Story = {
  args: {
    ...Size.args,
    title: 'Example',
  },
}

export const Loading: Story = {
  args: {
    src: '',
  },
}
