import CrudModule from '@/modules/CrudModule/CrudModule';
import PrescriptionsForm from '@/forms/PrescriptionsForm';
import useLanguage from '@/locale/useLanguage';

export default function Prescriptions() {
  const translate = useLanguage();
  const entity = 'prescriptions';
  const searchConfig = {
    displayLabels: [{ dataIndex: 'patient', indexProperty: 'fullName' }],
    searchFields: ['lastName', 'firstName'],

    outputValue: '_id',
  };

  const entityDisplayLabels = [{ dataIndex: 'patient', indexProperty: 'fullName' }];

  const readColumns = [
    {
      title: 'Sales Invoice No.',
      dataIndex: 'salesInvoiceNumber',
    },
    {
      title: 'Patient',
      dataIndex: 'patient',
      indexProperty: 'fullName',
    },

    {
      title: 'Type of Lens',
      dataIndex: 'typeOfLens',
    },
    {
      title: 'Type of Frame',
      dataIndex: 'typeOfFrame',
    },

    {
      title: 'Prism',
      dataIndex: 'prism',
    },
    {
      title: 'Axis',
      dataIndex: 'axis',
    },
    {
      title: 'Sphere Power',
      dataIndex: 'spherePower',
    },
    {
      title: 'Cylinder Power',
      dataIndex: 'cylinderPower',
    },
    {
      title: 'PD',
      dataIndex: 'pd',
    },
    {
      title: 'ADD',
      dataIndex: 'add',
    },
  ];

  const dataTableColumns = [
    {
      title: 'SI No.',
      dataIndex: 'salesInvoiceNumber',
    },
    {
      title: 'Patient',
      dataIndex: 'patient',
      render: (patient) => patient && `${patient.firstName} ${patient.lastName}`,
    },
    {
      title: 'Lens Type',
      dataIndex: 'typeOfLens',
    },
    {
      title: 'Frame Type',
      dataIndex: 'typeOfFrame',
    },
    {
      title: 'Prism',
      dataIndex: 'prism',
    },
    {
      title: 'Axis',
      dataIndex: 'axis',
    },
    {
      title: 'Sph',
      dataIndex: 'spherePower',
    },
    {
      title: 'Cyl',
      dataIndex: 'cylinderPower',
    },
    {
      title: 'PD',
      dataIndex: 'pd',
    },
    {
      title: 'ADD',
      dataIndex: 'add',
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('prescriptions'),
    DATATABLE_TITLE: translate('prescriptions_list'),
    ADD_NEW_ENTITY: translate('add_new_prescriptions'),
    ENTITY_NAME: translate('prescriptions'),
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
      createForm={<PrescriptionsForm />}
      updateForm={<PrescriptionsForm isUpdateForm={true} />}
      config={config}
    />
  );
}
