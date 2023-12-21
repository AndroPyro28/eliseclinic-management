import CrudModule from '@/modules/CrudModule/CrudModule';
import SupplierForm from '@/forms/SupplierForm';
import useLanguage from '@/locale/useLanguage';
import dayjs from 'dayjs';

export default function Supplier() {
  const translate = useLanguage();
  const entity = 'supplier';
  const searchConfig = {
    displayLabels: ['company'],
    searchFields: 'company',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['company'];

  const readColumns = [
    {
      title: 'Supplier Name',
      dataIndex: 'company',
    },
    {
      title: 'Location',
      dataIndex: 'address',
    },
    {
      title: 'Type of Lens',
      dataIndex: 'typeOfLens',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
  ];
  const dataTableColumns = [
    {
      title: 'Supplier Name',
      dataIndex: 'company',
    },
    {
      title: 'Location',
      dataIndex: 'address',
    },
    {
      title: 'Type of Lens',
      dataIndex: 'typeOfLens',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Created',
      dataIndex: 'created',
      render: (date) => dayjs(date).format('MM/DD/YYYY'),
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('supplier'),
    DATATABLE_TITLE: translate('supplier_list'),
    ADD_NEW_ENTITY: translate('add_new_supplier'),
    ENTITY_NAME: translate('supplier'),
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
      createForm={<SupplierForm />}
      updateForm={<SupplierForm isUpdateForm={true} />}
      config={config}
    />
  );
}
