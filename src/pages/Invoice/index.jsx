import dayjs from 'dayjs';
import { Tag } from 'antd';
import useLanguage from '@/locale/useLanguage';

import { useMoney } from '@/settings';
import InvoiceDataTableModule from '@/modules/InvoiceModule/InvoiceDataTableModule';

export default function Invoice() {
  const translate = useLanguage();
  const entity = 'invoice';
  const { moneyFormatter } = useMoney();

  const searchConfig = {
    displayLabels: [
      { name: 'name', surname: 'surname', salesInvoiceNumber: 'salesInvoiceNumber', birthday: '' },
    ],
    searchFields: 'name,surname,birthday',
  };
  const entityDisplayLabels = ['salesInvoiceNumber', 'patients.firstName'];
  const dataTableColumns = [
    {
      title: 'S.I Number ID',
      dataIndex: 'salesInvoiceNumber',
      // render: (prescriptions) => prescriptions && `${prescriptions.salesInvoiceNumber}`,
    },
    {
      title: translate('Patient'),
      dataIndex: 'patient',
      render: (patient) => patient && `${patient.firstName} ${patient.lastName}`,
    },
    {
      title: translate('Date'),
      dataIndex: 'date',
      render: (date) => {
        return dayjs(date).format('DD/MM/YYYY');
      },
    },
    {
      title: translate('Total'),
      dataIndex: 'total',
      onCell: () => {
        return {
          style: {
            textAlign: 'right',
            whiteSpace: 'nowrap',
          },
        };
      },
      render: (total) => moneyFormatter({ amount: total }),
    },
    {
      title: translate('Status'),
      dataIndex: 'status',
      render: (status) => {
        // let color =
        //   paymentStatus === 'unpaid'
        //     ? 'volcano'
        //     : paymentStatus === 'with balance'
        //     ? 'green'
        //     : paymentStatus === 'paid'
        //     ? 'gold'
        //     : '';

        let color =
          status === 'unpaid'
            ? 'black'
            : status === 'with balance'
            ? 'gold'
            : status === 'paid'
            ? 'green'
            : 'volcano';

        return <Tag color={color}>{status && translate(status)}</Tag>;
      },
    },
    // {
    //   title: translate('Payment'),
    //   dataIndex: 'paymentStatus',
    //   render: (paymentStatus) => {
    //     let color =
    //       paymentStatus === 'unpaid'
    //         ? 'volcano'
    //         : paymentStatus === 'paid'
    //         ? 'green'
    //         : paymentStatus === 'overdue'
    //         ? 'red'
    //         : 'purple';

    //     return <Tag color={color}>{paymentStatus && translate(paymentStatus)}</Tag>;
    //   },
    // },
    // {
    //   title: translate('Created By'),
    //   dataIndex: ['createdBy', 'name'],
    //   // render: (name) => {
    //   //   console.log('🚀 ~ file: index.jsx:81 ~ Invoice ~ name:', name);
    //   //   let color = name !== '' ? 'blue' : 'gray';
    //   //   return <Tag color={color}>{name ? name : 'Administrator'}</Tag>;
    //   // },
    // },
  ];

  const Labels = {
    PANEL_TITLE: translate('invoice'),
    DATATABLE_TITLE: translate('invoice_list'),
    ADD_NEW_ENTITY: translate('add_new_invoice'),
    ENTITY_NAME: translate('invoice'),
    CREATE_ENTITY: translate('save'),
    UPDATE_ENTITY: translate('update'),
    RECORD_ENTITY: translate('record_payment'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };

  return <InvoiceDataTableModule config={config} />;
}
