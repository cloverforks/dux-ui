import type { Meta, StoryObj } from '@storybook/react'
import SelectTree from './index'
import { treeData } from '../cascader/stories'

const meta: Meta = {
  title: 'Form/SelectTree',
  component: SelectTree,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    placeholder: 'Please Select',
    options: treeData,
  },
} satisfies Meta<typeof SelectTree>

export default meta

type Story = StoryObj<typeof SelectTree>

export const Base: Story = {
  args: {},
}
