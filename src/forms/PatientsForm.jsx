import { Form, Input, DatePicker } from 'antd';
import { validatePhoneNumber } from '@/utils/helpers';

export default function PatientsForm() {
  const validateEmptyString = (_, value) => {
    if (value && value.trim() === '') {
      return Promise.reject(new Error('Field cannot be empty'));
    }

    return Promise.resolve();
  };

  return (
    <>
      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[
          {
            required: true,
          },
          {
            validator: validateEmptyString,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="First Name"
        name="firstName"
        rules={[
          {
            required: true,
          },
          {
            validator: validateEmptyString,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Middle Name"
        name="middleName"
        rules={[
          {
            validator: validateEmptyString,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Suffix"
        name="suffix"
        rules={[
          {
            validator: validateEmptyString,
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
        <DatePicker placeholder="Select Date" format={'MM/DD/YYYY'} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone"
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
            validator: validateEmptyString,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Medical History"
        name="medicalHistory"
        rules={[
          {
            validator: validateEmptyString,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Senior Citizen No."
        name="seniorCitizenNo"
        rules={[
          {
            validator: validateEmptyString,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="PWD Citizen No."
        name="pwdCitizenNo"
        rules={[
          {
            validator: validateEmptyString,
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
}
