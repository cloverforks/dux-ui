import type { Meta, StoryObj } from '@storybook/react'

import Form from './index'
import Button from '../button'
import Switch from '../switch'
import Checkbox from '../checkbox'
import Radio from '../radio'
import Slider from '../slider'
import DatePicker from '../datePicker'
import SelectTree from '../selectTree'
import Cascader from '../cascader'
import Select from '../select'
import InputNumber from '../inputNumber'
import Input from '../input'
import { treeData } from '../cascader/stories'
import Card from '../card'

const meta: Meta = {
  title: 'Form/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Form>

export default meta

type Story = StoryObj<typeof Form>

export const Base: Story = {
  args: {},
  render: (args) => (
    <Card title='Form'>
      <Form {...args}>
        <Form.Item field='input' name='Input' required>
          <Input placeholder='Please enter Text' />
        </Form.Item>
        <div className='grid grid-cols-2 gap-4'>
          <Form.Item field='input_number' name='Input Number'>
            <InputNumber placeholder='Please enter First Name' />
          </Form.Item>

          <Form.Item field='select' name='Select'>
            <Select placeholder='Please select'>
              <Select.Option value={0}>option 1</Select.Option>
              <Select.Option value={1}>option 2</Select.Option>
            </Select>
          </Form.Item>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <Form.Item field='cascader' name='Cascader'>
            <Cascader options={treeData} placeholder='Please select' />
          </Form.Item>
          <Form.Item field='select_tree' name='Select Tree'>
            <SelectTree options={treeData} placeholder='Please select' />
          </Form.Item>
        </div>
        <Form.Item field='date' name='Date'>
          <DatePicker placeholder='Please select a date' />
        </Form.Item>
        <Form.Item field='slider' name='Slider' defaultValue={[50]}>
          <Slider />
        </Form.Item>
        <Form.Item field='radio' name='Radio' defaultValue={0}>
          <Radio.Group>
            <Radio value={0}>option 0</Radio>
            <Radio value={1}>option 1</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item field='checkbox' name='Checkbox'>
          <Checkbox.Group>
            <Checkbox value={0}>option 0</Checkbox>
            <Checkbox value={1}>option 1</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item field='switch' name='Switch'>
          <Switch />
        </Form.Item>

        <Form.Action>
          {(action) => (
            <div className='flex justify-end gap-2'>
              <Button color='primary' type='outline' onClick={action.reset}>
                Reset
              </Button>
              <Button color='primary' htmlType='submit'>
                Submit
              </Button>
            </div>
          )}
        </Form.Action>
      </Form>
    </Card>
  ),
}
