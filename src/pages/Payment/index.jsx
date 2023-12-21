import CrudModule from '@/modules/CrudModule/CrudModule';
import PaymentForm from '@/forms/PaymentForm'; // Ensure to create this form
import useLanguage from '@/locale/useLanguage';
import dayjs from 'dayjs';

export default function Payment() {
  const translate = useLanguage();
  const entity = 'payment';
  const searchConfig = {
    displayLabels: [
      { dataIndex: 'patient', indexProperty: 'fullName', salesInvoiceNumber: 'salesInvoiceNumber' },
    ],
    searchFields: ['lastName', 'firstName'],
    outputValue: '_id',
  };

  const entityDisplayLabels = [
    { dataIndex: 'patient', indexProperty: 'fullName', salesInvoiceNumber: 'salesInvoiceNumber' },
  ];

  const readColumns = [
    {
      title: 'S.I Number',
      dataIndex: 'salesInvoiceNumber',
      indexProperty: 'salesInvoiceNumber',
    },
    {
      title: 'Patient',
      dataIndex: 'patient',
      indexProperty: 'fullName',
    },
    {
      title: 'Date Ordered',
      dataIndex: 'orderDate',
      isDate: true,
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      isDate: true,
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
    },
    {
      title: 'Deposit',
      dataIndex: 'deposit',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Payment Mode',
      dataIndex: 'paymentMode',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'createdBy',
      dataIndex: 'createdBy',
    },
  ];
  const dataTableColumns = [
    {
      title: 'S.I Number',
      dataIndex: 'salesInvoiceNumber',
      render: (prescriptions) => prescriptions && `${prescriptions.salesInvoiceNumber}`,
    },
    {
      title: 'Patient',
      dataIndex: 'patient',
      render: (patient) => patient && `${patient.firstName} ${patient.lastName}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Payment Mode',
      dataIndex: 'paymentMode',
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
    },
    {
      title: 'Date Ordered',
      dataIndex: 'orderDate',
      render: (date) => dayjs(date).format('MM/DD/YYYY'),
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      render: (date) => dayjs(date).format('MM/DD/YYYY'),
    },
    {
      title: 'Created',
      dataIndex: 'created',
      render: (date) => dayjs(date).format('MM/DD/YYYY'),
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('payment'),
    DATATABLE_TITLE: translate('payment_list'),
    ADD_NEW_ENTITY: translate('add_new_payment'),
    ENTITY_NAME: translate('payment'),
    CREATE_ENTITY: translate('save'),
    UPDATE_ENTITY: translate('update'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    dataTableColumns,
    readColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <>
      <CrudModule
        createForm={<PaymentForm />}
        updateForm={<PaymentForm isUpdateForm={true} />}
        config={config}
      />
    </>
  );
}
