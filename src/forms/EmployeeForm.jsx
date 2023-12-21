import { Form, Input, Select } from 'antd';
import { DatePicker } from 'antd';
import { validatePhoneNumber } from '@/utils/helpers';

import useLanguage from '@/locale/useLanguage';

export default function EmployeeForm() {
  const translate = useLanguage();

  return (
    <>
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            required: true,
          },
          {
            pattern: validatePhoneNumber,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Birthday"
        name="birthday"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <DatePicker
          placeholder={translate('select_date')}
          format={'MM/DD/YYYY'}
          style={{ width: '100%' }}
        />
      </Form.Item>

      <Form.Item
        name="gender"
        label={translate('gender')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Select.Option value="male">{translate('Male')}</Select.Option>
          <Select.Option value="female">{translate('Female')}</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Job Title"
        name="jobTitle"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Department"
        name="department"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
}
