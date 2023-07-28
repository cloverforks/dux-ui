import type { Meta, StoryObj } from '@storybook/react'

import CardMedia from './index'
import Flex from '../flex'
import Button from '../button'
import Dropdown from '../dropdown'
import Link from '../link'

const meta: Meta = {
  title: 'Show/CardMedia',
  component: CardMedia,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    title: 'Title',
    desc: 'desc',
    image: 'https://picsum.photos/600/200',
    width: 400,
  },
} satisfies Meta<typeof CardMedia>

export default meta

type Story = StoryObj<typeof CardMedia>

export const Base: Story = {
  render: (args) => (
    <Flex>
      <CardMedia {...args} />
    </Flex>
  ),
}

export const Extra: Story = {
  args: {
    title: <Link>Link Title</Link>,
    extra: (
      <Dropdown
        trigger={
          <Button icon='i-tabler:dots-vertical' type='text' pill={true} aria-label='more'></Button>
        }
      >
        <Dropdown.Item>menu 1</Dropdown.Item>
        <Dropdown.Item>menu 2</Dropdown.Item>
      </Dropdown>
    ),
  },
  render: (args) => (
    <Flex>
      <CardMedia {...args}>
        <CardMedia.Tag>tag</CardMedia.Tag>
      </CardMedia>
    </Flex>
  ),
}
