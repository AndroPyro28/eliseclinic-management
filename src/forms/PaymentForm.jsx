import AutoCompleteAsync from '@/components/AutoCompleteAsync';
import { Form, Input, InputNumber, DatePicker } from 'antd';
import { Select } from 'antd';
import { useMoney } from '@/settings';

import useLanguage from '@/locale/useLanguage';

export default function PaymentForm({ maxAmount = null, isUpdateForm = false }) {
  const translate = useLanguage();
  const validateEmptyString = (_, value) => {
    if (value && value.trim() === '') {
      return Promise.reject(new Error('Field cannot be empty'));
    }

    return Promise.resolve();
  };
  const { TextArea } = Input;
  const money = useMoney();

  return (
    <>
      <Form.Item
        label="S.I Number"
        name="salesInvoiceNumber"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <AutoCompleteAsync
          entity={'prescriptions'}
          displayLabels={['salesInvoiceNumber']}
          searchFields={['salesInvoiceNumber']}
        />
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
      <Form.Item label="Date Ordered" name="orderDate">
        <DatePicker
          placeholder={translate('select_date')}
          format={'MM/DD/YYYY'}
          style={{ width: '100%' }}
        />
      </Form.Item>
      <Form.Item label="Due date" name="dueDate">
        <DatePicker
          placeholder={translate('select_date')}
          format={'MM/DD/YYYY'}
          style={{ width: '100%' }}
        />
      </Form.Item>
      <Form.Item label="Balance" name="balance">
        <InputNumber
          className="moneyInput"
          min={0}
          controls={false}
          max={maxAmount}
          addonAfter={money.currency_position === 'after' ? money.currency_symbol : undefined}
          addonBefore={money.currency_position === 'before' ? money.currency_symbol : null}
        />
      </Form.Item>
      <Form.Item label="Deposit" name="deposit">
        <InputNumber
          className="moneyInput"
          min={0}
          controls={false}
          max={maxAmount}
          addonAfter={money.currency_position === 'after' ? money.currency_symbol : undefined}
          addonBefore={money.currency_position === 'before' ? money.currency_symbol : null}
        />
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
          <Select.Option value="sent">Sent</Select.Option>
          <Select.Option value="pending">Pending</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Payment Mode"
        name="paymentMode"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Select.Option value="cash">Cash</Select.Option>
          <Select.Option value="gcash">Gcash</Select.Option>
          <Select.Option value="card">Card</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label={translate('Description')} name="description">
        <TextArea />
      </Form.Item>
      <Form.Item
        label="Created By"
        name="createdBy"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Select.Option value="superAdmin">Super Admin</Select.Option>
          <Select.Option value="admin">Admin</Select.Option>
        </Select>
      </Form.Item>
    </>
  );
}
