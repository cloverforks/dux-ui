import type { Meta, StoryObj } from '@storybook/react'

import Checkbox from './index'
import Flex from '../flex'

const meta: Meta = {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      options: [true, false, 'indeterminate'],
      control: { type: 'radio' },
    },
    defaultChecked: {
      options: [true, false, 'indeterminate'],
      control: { type: 'radio' },
    },
  },
  args: {},
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof Checkbox>

export const Base: Story = {
  args: {},
  render: (args) => (
    <Flex>
      <Checkbox {...args} />
      <Checkbox {...args} defaultChecked={true}>
        checked
      </Checkbox>
      <Checkbox {...args} defaultChecked='indeterminate'>
        indeterminate
      </Checkbox>
    </Flex>
  ),
}
