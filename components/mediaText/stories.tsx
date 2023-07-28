import type { Meta, StoryObj } from '@storybook/react'

import MediaText from './index'
import Link from '../link'

const meta: Meta = {
  title: 'Show/MediaText',
  component: MediaText,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof MediaText>

export default meta

type Story = StoryObj<typeof MediaText>

export const Base: Story = {
  args: {},
  render: (args) => (
    <MediaText {...args}>
      <MediaText.Image src='https://i.pravatar.cc/300' />
      <MediaText.Title>Here is the title</MediaText.Title>
      <MediaText.Desc>This is a text description</MediaText.Desc>
    </MediaText>
  ),
}

export const More: Story = {
  args: {},
  render: (args) => (
    <MediaText {...args}>
      <MediaText.Image src='https://i.pravatar.cc/300' width={60} height={80} />
      <MediaText.Title>
        <Link>Here is the title</Link>
      </MediaText.Title>
      <MediaText.Desc>This is a text description</MediaText.Desc>
      <MediaText.Desc>This is a text description 2</MediaText.Desc>
    </MediaText>
  ),
}
