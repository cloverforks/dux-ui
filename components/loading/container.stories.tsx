import type { Meta, StoryObj } from '@storybook/react'

import Loading from './index'
import Card from '../card'

const meta: Meta = {
  title: 'Elements/Loading/Loading.Controller',
  component: Loading.Container,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['default', 'primary', 'secondary', 'info', 'warn', 'danger', 'success', 'white'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Loading>

export default meta

type Story = StoryObj<typeof Loading>

export const Base: Story = {
  args: {},
  render: (args) => (
    <Loading.Container {...args}>
      <Card title='Ttitle'>Content</Card>
    </Loading.Container>
  ),
}
