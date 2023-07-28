import type { Meta, StoryObj } from '@storybook/react'

import CheckboxGroup from './group'
import Checkbox from '.'

const meta: Meta = {
  title: 'Form/Checkbox/Group',
  component: CheckboxGroup,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof CheckboxGroup>

export default meta

type Story = StoryObj<typeof CheckboxGroup>

export const Group: Story = {
  args: {
    defaultValue: [2],
  },
  render: (args) => (
    <CheckboxGroup
      {...args}
      onChange={(value) => {
        console.log(value)
      }}
    >
      <Checkbox value={0}>option 1</Checkbox>
      <Checkbox value={1}>option 2</Checkbox>
      <Checkbox value={2}>option 3</Checkbox>
      <Checkbox value={3} disabled>
        option 4
      </Checkbox>
    </CheckboxGroup>
  ),
}

export const Extends: Story = {
  args: {
    extend: true,
    defaultValue: [0],
  },
  render: (args) => (
    <CheckboxGroup {...args}>
      <Checkbox
        value={0}
        desc='This is the description'
        extra={<div className='i-tabler:shopping-bag h-6 w-6'></div>}
      >
        option 1
      </Checkbox>
      <Checkbox
        value={1}
        desc='This is the description'
        extra={<div className='i-tabler:ticket h-6 w-6'></div>}
      >
        option 2
      </Checkbox>
    </CheckboxGroup>
  ),
}

export const Disabled: Story = {
  args: {
    extend: true,
    defaultValue: [0],
    disabled: true,
  },
  render: (args) => (
    <CheckboxGroup {...args}>
      <Checkbox
        value={0}
        desc='This is the description'
        extra={<div className='i-tabler:shopping-bag h-6 w-6'></div>}
      >
        option 1
      </Checkbox>
      <Checkbox
        value={1}
        desc='This is the description'
        extra={<div className='i-tabler:ticket h-6 w-6'></div>}
      >
        option 2
      </Checkbox>
    </CheckboxGroup>
  ),
}
