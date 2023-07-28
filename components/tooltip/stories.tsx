import type { Meta, StoryObj } from '@storybook/react'

import Tooltip from './index'
import Button from '../button'

const meta: Meta = {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
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
    content: 'This is the prompt text',
    children: (
      <Button color='primary' pill={true}>
        Open
      </Button>
    ),
  },
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof Tooltip>

export const Base: Story = {
  render: (args) => <Tooltip {...args}></Tooltip>,
}
