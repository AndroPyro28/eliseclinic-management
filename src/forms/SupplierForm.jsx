import { Form, Input } from 'antd';
import { validatePhoneNumber } from '@/utils/helpers';

export default function SupplierForm() {
  const validateEmptyString = (_, value) => {
    if (value && value.trim() === '') {
      return Promise.reject(new Error('Field cannot be empty'));
    }

    return Promise.resolve();
  };

  return (
    <>
      <Form.Item
        label="Supplier Name"
        name="company"
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
        label="Location"
        name="address"
        rules={[
          {
            validator: validateEmptyString,
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
            pattern: validatePhoneNumber,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Type of Lens"
        name="typeOfLens"
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
    </>
  );
}
