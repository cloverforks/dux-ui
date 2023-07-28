import type { Meta, StoryObj } from '@storybook/react'

import Dropdown from './index'
import Button from '../button'

const meta: Meta = {
  title: 'Feedback/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      type: 'function',
    },
    position: {
      options: [
        'bottom',
        'bottom-start',
        'bottom-end',
        'top',
        'top-start',
        'top-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
      ],
      control: { type: 'select' },
    },
  },
  args: {
    trigger: (
      <Button color='primary' pill={true}>
        Open
      </Button>
    ),
  },
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof Dropdown>

export const Base: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <Dropdown.Item>Menu 1</Dropdown.Item>
      <Dropdown.Item>Menu 2</Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item>Menu 3</Dropdown.Item>
    </Dropdown>
  ),
}

export const Icon: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <Dropdown.Item icon='i-tabler:address-book'>Menu 1</Dropdown.Item>
      <Dropdown.Item icon='i-tabler:adjustments-filled'>Menu 2</Dropdown.Item>
    </Dropdown>
  ),
}

export const Level: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <Dropdown.Item>Menu 1</Dropdown.Item>
      <Dropdown.ItemSub label='Menu 2'>
        <Dropdown.Item>Menu 2-1</Dropdown.Item>
        <Dropdown.Item>Menu 2-2</Dropdown.Item>
        <Dropdown.Item>Menu 2-3</Dropdown.Item>
      </Dropdown.ItemSub>
    </Dropdown>
  ),
}
