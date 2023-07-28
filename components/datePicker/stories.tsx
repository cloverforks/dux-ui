import type { Meta, StoryObj } from '@storybook/react'

import DatePicker from './index'
import Flex from '../flex'

const meta: Meta = {
  title: 'Form/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    placeholder: 'Please select a date',
  },
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof DatePicker>

export const Date: Story = {
  args: {
    defaultValue: '2023-01-01',
  },
}

export const Month: Story = {
  args: {
    type: 'month',
    defaultValue: '2023-01',
  },
}

export const Year: Story = {
  args: {
    type: 'year',
    defaultValue: '2023',
  },
}

export const Datetime: Story = {
  args: {
    type: 'datetime',
    defaultValue: '2023-01-01 12:00:00',
  },
}

export const Time: Story = {
  args: {
    type: 'time',
    defaultValue: '12:00:00',
  },
}

export const Range: Story = {
  args: {},
  render: () => (
    <Flex>
      <DatePicker placeholder={['Start date', 'Stop date']} range />
      <DatePicker placeholder={['Start month', 'Stop month']} range type='month' />
      <DatePicker placeholder={['Start year', 'Stop year']} range type='year' />
      <DatePicker placeholder={['Start datetime', 'Stop datetime']} range type='datetime' />
      <DatePicker placeholder={['Start time', 'Stop time']} range type='time' />
    </Flex>
  ),
}
