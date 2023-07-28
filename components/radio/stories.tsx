import type { Meta, StoryObj } from '@storybook/react'

import Radio from './index'
import RadioGroup from './group'

const meta: Meta = {
  title: 'Form/Radio',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof RadioGroup>

export const Base: Story = {
  args: {
    defaultValue: 0,
  },
  render: (args) => (
    <Radio.Group {...args}>
      <Radio value={0}>option 1</Radio>
      <Radio value={1}>option 2</Radio>
      <Radio value={2}>option 3</Radio>
      <Radio value={3}>option 4</Radio>
    </Radio.Group>
  ),
}

export const Extend: Story = {
  args: {
    defaultValue: 0,
    extend: 'fill',
  },
  render: (args) => (
    <Radio.Group {...args}>
      <Radio
        value={0}
        desc='This is the description'
        extra={<div className='i-tabler:shopping-bag h-6 w-6'></div>}
      >
        option 1
      </Radio>
      <Radio
        value={1}
        desc='This is the description'
        extra={<div className='i-tabler:ticket h-6 w-6'></div>}
      >
        option 2
      </Radio>
    </Radio.Group>
  ),
}

export const Disabled: Story = {
  args: {
    defaultValue: 0,
    extend: 'fill',
    disabled: true,
  },
  render: Extend.render,
}
