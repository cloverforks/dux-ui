import type { Meta, StoryObj } from '@storybook/react'

import Descriptions from './index'

const meta: Meta = {
  title: 'Show/Descriptions',
  component: Descriptions,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Descriptions>

export default meta

type Story = StoryObj<typeof Descriptions>

export const Base: Story = {
  args: {},
  render: (args) => (
    <Descriptions title='User Info' {...args}>
      <Descriptions.Item label='Name'>Socrates</Descriptions.Item>
      <Descriptions.Item label='Mobile'>123-1234-1234</Descriptions.Item>
      <Descriptions.Item label='Residence'>Beijing</Descriptions.Item>
      <Descriptions.Item label='Hometown'>Beijing</Descriptions.Item>
      <Descriptions.Item label='Address'>Yingdu Building, Zhichun Road, Beijing</Descriptions.Item>
    </Descriptions>
  ),
}

export const Border: Story = {
  args: {
    column: 2,
    border: true,
  },
  render: (args) => (
    <Descriptions title='User Info' {...args}>
      <Descriptions.Item label='Name'>Socrates</Descriptions.Item>
      <Descriptions.Item label='Mobile'>123-1234-1234</Descriptions.Item>
      <Descriptions.Item label='Residence'>Beijing</Descriptions.Item>
      <Descriptions.Item label='Hometown'>Beijing</Descriptions.Item>
      <Descriptions.Item label='Address'>Yingdu Building, Zhichun Road, Beijing</Descriptions.Item>
    </Descriptions>
  ),
}

export const Vertical: Story = {
  args: {
    direction: 'vertical',
  },
  render: (args) => (
    <Descriptions title='User Info' {...args}>
      <Descriptions.Item label='Name'>Socrates</Descriptions.Item>
      <Descriptions.Item label='Mobile'>123-1234-1234</Descriptions.Item>
      <Descriptions.Item label='Residence'>Beijing</Descriptions.Item>
      <Descriptions.Item label='Hometown'>Beijing</Descriptions.Item>
      <Descriptions.Item label='Address'>Yingdu Building, Zhichun Road, Beijing</Descriptions.Item>
    </Descriptions>
  ),
}

export const Empty: Story = {
  args: {},
  render: (args) => <Descriptions title='User Info' {...args}></Descriptions>,
}
