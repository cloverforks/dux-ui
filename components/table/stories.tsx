import type { Meta, StoryObj } from '@storybook/react'
import Table from './index'
import { data } from '../select/stories'
import Card from '../card'
import Avatar from '../avatar'

const meta: Meta = {
  title: 'Data/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof Table>

export const Base: Story = {
  args: {},
  render: (args) => (
    <Card title='Table'>
      <div className='p-4'>
        <Table {...args} data={data}>
          <Table.Column field='image' title='Avatar'>
            {(row) => <Avatar src={row.image} />}
          </Table.Column>
          <Table.Column field='label' title='Name' />
          <Table.Column field='desc' title='Email' />
        </Table>
      </div>
    </Card>
  ),
}

export const Selection: Story = {
  args: {
    selection: true,
  },
  render: (args) => (
    <Card title='Table'>
      <div className='p-4'>
        <Table {...args} data={data}>
          <Table.Column field='image' title='Avatar'>
            {(row) => <Avatar src={row.image} />}
          </Table.Column>
          <Table.Column field='label' title='Name' />
          <Table.Column field='desc' title='Email' />
        </Table>
      </div>
    </Card>
  ),
}
