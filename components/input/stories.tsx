import type { Meta, StoryObj } from '@storybook/react'
import Input from './index'
import Flex from '../flex'

const meta: Meta = {
  title: 'Form/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    placeholder: 'Please Enter something',
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof Input>

export const Base: Story = {
  args: {},
}

export const Extend: Story = {
  args: {},
  render: (args) => (
    <Input
      {...args}
      prefix={<div className='i-tabler:user'></div>}
      suffix={<div className='i-tabler:star'>11</div>}
      before='http://'
      after='$'
    />
  ),
}

export const Status: Story = {
  args: {},
  render: () => (
    <Flex>
      <Input defaultValue='Loading' error />
      <Input defaultValue='Loading' loading />
      <Input defaultValue='Disabled' disabled />
      <Input defaultValue='ReadOnly' readOnly />
      <Input defaultValue='Click to clear content' clear />
    </Flex>
  ),
}
