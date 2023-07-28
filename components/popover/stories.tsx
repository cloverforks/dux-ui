import type { Meta, StoryObj } from '@storybook/react'

import Popover from './index'
import Button from '../button'

const meta: Meta = {
  title: 'Feedback/Popover',
  component: Popover,
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
} satisfies Meta<typeof Popover>

export default meta

type Story = StoryObj<typeof Popover>

export const Base: Story = {
  render: (args) => <Popover {...args}>Popover Content</Popover>,
}
