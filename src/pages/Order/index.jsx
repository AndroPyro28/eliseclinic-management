import dayjs from 'dayjs';
import CrudModule from '@/modules/CrudModule/CrudModule';
import OrderForm from '@/forms/OrderForm'; // Ensure to create this form
import useLanguage from '@/locale/useLanguage';

export default function Order() {
  const translate = useLanguage();
  const entity = 'order';

  const searchConfig = {
    displayLabels: [{ dataIndex: 'patient', indexProperty: 'fullName' }],
    searchFields: 'name',
    outputValue: '_id',
  };

  const entityDisplayLabels = [{ dataIndex: 'patient', indexProperty: 'fullName' }];

  const readColumns = [
    {
      title: 'Order ID',
      dataIndex: 'orderId',
    },
    {
      title: 'Patient',
      dataIndex: 'patient',
      indexProperty: 'fullName',
    },
    {
      title: 'Supplier',
      dataIndex: 'supplier',
      indexProperty: 'company',
    },
    {
      title: 'Frame',
      dataIndex: 'frame',
    },
    {
      title: 'Lens',
      dataIndex: 'lens',
    },
    {
      title: '',
      dataIndex: '',
    },
    {
      title: 'OS (Left Eye)',
      dataIndex: 'os',
    },
    {
      title: 'Left Sph',
      dataIndex: 'leftSph',
    },
    {
      title: 'Left Cyl',
      dataIndex: 'leftCyl',
    },
    {
      title: 'Left Axis',
      dataIndex: 'leftAxis',
    },
    {
      title: 'Left PD',
      dataIndex: 'leftPd',
    },
    {
      title: '',
      dataIndex: '',
    },
    {
      title: 'OD (Right Eye)',
      dataIndex: 'od',
    },
    {
      title: 'Right Sph',
      dataIndex: 'rightSph',
    },
    {
      title: 'Right Cyl',
      dataIndex: 'rightCyl',
    },
    {
      title: 'Right Axis',
      dataIndex: 'rightAxis',
    },

    {
      title: '',
      dataIndex: '',
    },

    {
      title: 'Lint',
      dataIndex: 'lint',
    },
    {
      title: 'Vertical',
      dataIndex: 'vertical',
    },
    {
      title: 'Horizontal',
      dataIndex: 'horizontal',
    },
    {
      title: 'Nose Bridge',
      dataIndex: 'noseBridge',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Date Ordered',
      dataIndex: 'dateOrdered',
      isDate: true,
    },
  ];
  const dataTableColumns = [
    {
      title: 'Order ID',
      dataIndex: 'orderId',
    },
    {
      title: 'Patient',
      dataIndex: 'patient',
      render: (patient) => patient && `${patient.firstName} ${patient.lastName}`,
    },
    {
      title: 'Supplier',
      dataIndex: 'supplier',
      render: (supplier) => supplier && `${supplier.company}`,
    },
    {
      title: 'Frame',
      dataIndex: 'frame',
    },
    {
      title: 'Lens',
      dataIndex: 'lens',
    },

    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Date Ordered',
      dataIndex: 'dateOrdered',
      render: (date) => {
        return dayjs(date).format('MM/DD/YYYY');
      },
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('order'),
    DATATABLE_TITLE: translate('order_list'),
    ADD_NEW_ENTITY: translate('add_new_order'),
    ENTITY_NAME: translate('order'),
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
    <CrudModule
      createForm={<OrderForm />}
      updateForm={<OrderForm isUpdateForm={true} />}
      config={config}
    />
  );
}
