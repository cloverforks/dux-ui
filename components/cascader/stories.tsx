import type { Meta, StoryObj } from '@storybook/react'
import Cascader from './index'

export const treeData = [
  {
    label: '福建',
    value: 'fj',
    children: [
      {
        label: '福州',
        value: 'fuzhou',
        children: [
          {
            label: '马尾',
            value: 'mawei',
          },
        ],
      },
      {
        label: '泉州',
        value: 'quanzhou',
      },
    ],
  },
  {
    label: '浙江',
    value: 'zj',
    children: [
      {
        label: '杭州',
        value: 'hangzhou',
        children: [
          {
            label: '余杭',
            value: 'yuhang',
          },
        ],
      },
    ],
  },
  {
    label: '北京',
    value: 'bj',
  },
]

const meta: Meta = {
  title: 'Form/Cascader',
  component: Cascader,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    placeholder: 'Please select',
    options: treeData,
  },
} satisfies Meta<typeof Cascader>

export default meta

type Story = StoryObj<typeof Cascader>

export const Base: Story = {
  args: {},
  render: (args) => <Cascader {...args} />,
}
