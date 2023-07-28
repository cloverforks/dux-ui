import type { Meta, StoryObj } from '@storybook/react'

import Skeleton from './index'

const meta: Meta = {
  title: 'Show/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof Skeleton>

export const Base: Story = {
  args: {},
  render: () => (
    <Skeleton>
      <Skeleton.Image />
      <Skeleton.Text />
      <Skeleton.Text />
    </Skeleton>
  ),
}

export const More: Story = {
  args: {},
  render: () => (
    <div className='flex flex-col gap-3'>
      <Skeleton.Image width={60} height={60} circle />
      <Skeleton.Text width='20%' />
      <Skeleton.Text />
    </div>
  ),
}
