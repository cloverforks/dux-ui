import type { Meta, StoryObj } from '@storybook/react'

import Card from './index'
import Button from '../button'

const meta: Meta = {
  title: 'Show/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
  args: { title: 'Title', children: 'content' },
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof Card>

export const Base: Story = {}

export const Extra: Story = {
  render: (arg) => (
    <Card
      {...arg}
      title='临江仙'
      desc='宋⋅ 晏几道'
      extra={
        <>
          <Button icon='i-tabler:refresh' type='outline'></Button>
        </>
      }
    >
      <div className='leading-8'>
        <div>梦后楼台高锁，酒醒帘幕低垂。去年春恨却来时，落花人独立，微雨燕双飞。</div>
        <div>记得小蘋初见，两重心字罗衣。琵琶弦上说相思，当时明月在，曾照彩云归。</div>
      </div>
    </Card>
  ),
}
