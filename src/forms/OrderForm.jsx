import { Form, Input, Select, DatePicker } from 'antd';
import AutoCompleteAsync from '@/components/AutoCompleteAsync';
import useLanguage from '@/locale/useLanguage';

export default function OrderForm() {
  const translate = useLanguage();
  const validateEmptyString = (_, value) => {
    if (value && value.trim() === '') {
      return Promise.reject(new Error('Field cannot be empty'));
    }

    return Promise.resolve();
  };

  return (
    <>
      <h3>Basic Information</h3>
      <Form.Item
        label="Order ID"
        name="orderId"
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
        label="Patient"
        name="patient"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <AutoCompleteAsync
          entity={'patients'}
          displayLabels={['name', 'firstName', 'lastName']}
          searchFields={['firstName', 'lastName']}
        />
      </Form.Item>

      <Form.Item
        label="Supplier"
        name="supplier"
        rules={[
          {
            validator: validateEmptyString,
          },
        ]}
      >
        <AutoCompleteAsync
          entity={'supplier'}
          displayLabels={['company']}
          searchFields={['company']}
        />
      </Form.Item>

      <Form.Item
        label="Frame"
        name="frame"
        rules={[
          {
            required: true,
          },
          {
            validator: validateEmptyString,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Lens"
        name="lens"
        rules={[
          {
            required: true,
          },
          {
            validator: validateEmptyString,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
      >
        <Input />
      </Form.Item>

      <h3>Oculus Sinister(Left Eye)</h3>
      <Form.Item
        label="OS"
        name="os"
        rules={[
          {
            required: true,
          },
          {
            validator: validateEmptyString,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Sph"
        name="leftSph"
        rules={[
          {
            required: true,
          },
          {
            validator: validateEmptyString,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Cyl"
        name="leftCyl"
        rules={[
          {
            required: true,
          },
          {
            validator: validateEmptyString,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Axis"
        name="leftAxis"
        rules={[
          {
            required: true,
          },
          {
            validator: validateEmptyString,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="PD"
        name="leftPd"
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

      <h3>Oculus Dextrus(Right Eye)</h3>
      <Form.Item
        label="OD"
        name="od"
        rules={[
          {
            required: true,
          },
          {
            validator: validateEmptyString,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Sph"
        name="rightSph"
        rules={[
          {
            required: true,
          },
          {
            validator: validateEmptyString,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Cyl"
        name="rightCyl"
        rules={[
          {
            required: true,
          },
          {
            validator: validateEmptyString,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Axis"
        name="rightAxis"
        rules={[
          {
            required: true,
          },
          {
            validator: validateEmptyString,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="PD"
        name="rightPd"
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

      <h3>Frame Measurement</h3>
      <Form.Item
        label="Lint"
        name="lint"
        rules={[
          {
            validator: validateEmptyString,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Vertical"
        name="vertical"
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
        label="Horizontal"
        name="horizontal"
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
        label="Nose Bridge"
        name="noseBridge"
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
        label={translate('status')}
        name="status"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Select.Option value="shipped">{translate('Shipped')}</Select.Option>
          <Select.Option value="received">{translate('Received')}</Select.Option>
          <Select.Option value="delivered">{translate('Delivered')}</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Date Ordered"
        name="dateOrdered"
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
    </>
  );
}
