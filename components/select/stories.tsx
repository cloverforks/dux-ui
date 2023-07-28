import type { Meta, StoryObj } from '@storybook/react'

import Select from './index'

const meta: Meta = {
  title: 'Form/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof Select>

export const data = [
  {
    value: 'John Doe',
    label: 'John Doe',
    image: `https://avatars.dicebear.com/v2/identicon/John%20Doe.svg`,
    desc: 'john.doe@example.com',
  },
  {
    value: 'Jane Smith',
    label: 'Jane Smith',
    image: `https://avatars.dicebear.com/v2/identicon/Jane%20Smith.svg`,
    desc: 'jane.smith@example.com',
  },
  {
    value: 'Michael Johnson',
    label: 'Michael Johnson',
    image: `https://avatars.dicebear.com/v2/identicon/Michael%20Johnson.svg`,
    desc: 'michael.johnson@example.com',
  },
  {
    value: 'Patricia Williams',
    label: 'Patricia Williams',
    image: `https://avatars.dicebear.com/v2/identicon/Patricia%20Williams.svg`,
    desc: 'patricia.williams@example.com',
  },
  {
    value: 'Robert Brown',
    label: 'Robert Brown',
    image: `https://avatars.dicebear.com/v2/identicon/Robert%20Brown.svg`,
    desc: 'robert.brown@example.com',
  },
  {
    value: 'Jennifer Jones',
    label: 'Jennifer Jones',
    image: `https://avatars.dicebear.com/v2/identicon/Jennifer%20Jones.svg`,
    desc: 'jennifer.jones@example.com',
  },
  {
    value: 'James Davis',
    label: 'James Davis',
    image: `https://avatars.dicebear.com/v2/identicon/James%20Davis.svg`,
    desc: 'james.davis@example.com',
  },
  {
    value: 'Linda Miller',
    label: 'Linda Miller',
    image: `https://avatars.dicebear.com/v2/identicon/Linda%20Miller.svg`,
    desc: 'linda.miller@example.com',
  },
  {
    value: 'William Wilson',
    label: 'William Wilson',
    image: `https://avatars.dicebear.com/v2/identicon/William%20Wilson.svg`,
    desc: 'william.wilson@example.com',
  },
  {
    value: 'Elizabeth Moore',
    label: 'Elizabeth Moore',
    image: `https://avatars.dicebear.com/v2/identicon/Elizabeth%20Moore.svg`,
    desc: 'elizabeth.moore@example.com',
  },
]

export const Base: Story = {
  args: {},
  render: (args) => (
    <Select placeholder='Please Select' {...args}>
      {data.map((item, key) => (
        <Select.Option key={key} value={item.value}>
          {item.label}
        </Select.Option>
      ))}
    </Select>
  ),
}

export const Tags: Story = {
  args: {},
  render: (args) => (
    <Select placeholder='Please Select' type='tags' {...args}>
      {data.map((item, key) => (
        <Select.Option key={key} value={item.value}>
          {item.label}
        </Select.Option>
      ))}
    </Select>
  ),
}

export const Multi: Story = {
  args: {},
  render: (args) => (
    <Select placeholder='Please Select' type='multi' {...args}>
      {data.map((item, key) => (
        <Select.Option key={key} value={item.value}>
          {item.label}
        </Select.Option>
      ))}
    </Select>
  ),
}

export const Group: Story = {
  args: {},
  render: (args) => (
    <Select placeholder='Please Select' {...args}>
      <Select.Group label='Group 1'>
        {data.map((item, key) => (
          <Select.Option key={key} value={item.value}>
            {item.label}
          </Select.Option>
        ))}
      </Select.Group>
    </Select>
  ),
}

export const Extend: Story = {
  args: {},
  render: (args) => (
    <Select placeholder='Please Select' {...args}>
      {data.map((item, key) => (
        <Select.Option key={key} value={item.value} image={item.image} desc={item.desc}>
          {item.label}
        </Select.Option>
      ))}
    </Select>
  ),
}
