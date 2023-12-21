import CrudModule from '@/modules/CrudModule/CrudModule';
import PatientsForm from '@/forms/PatientsForm'; // Ensure to create this form
import useLanguage from '@/locale/useLanguage';
import dayjs from 'dayjs';

export default function Patients() {
  const translate = useLanguage();
  const entity = 'patients';
  const searchConfig = {
    displayLabels: ['firstName', 'lastName'],
    searchFields: ['lastName', 'firstName'],
    outputValue: '_id',
  };

  const entityDisplayLabels = ['firstName', 'lastName'];

  const readColumns = [
    {
      title: 'Last Name',
      dataIndex: 'lastName',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
    },
    {
      title: 'Middle Name',
      dataIndex: 'middleName',
    },
    {
      title: 'Suffix',
      dataIndex: 'suffix',
    },

    {
      title: 'Birthday',
      dataIndex: 'birthday',
      isDate: true,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'address',
      dataIndex: 'address',
    },
    {
      title: 'Medical History',
      dataIndex: 'medicalHistory',
    },
    {
      title: 'Senior Citizen No.',
      dataIndex: 'seniorCitizenNo',
    },
    {
      title: 'PWD Citizen No.',
      dataIndex: 'pwdCitizenNo',
    },
  ];
  const dataTableColumns = [
    {
      title: 'Last Name',
      dataIndex: 'lastName',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      render: (date) => dayjs(date).format('MM/DD/YYYY'),
    },
    {
      title: 'Created',
      dataIndex: 'created',
      render: (date) => dayjs(date).format('MM/DD/YYYY'),
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('patients'),
    DATATABLE_TITLE: translate('patients_list'),
    ADD_NEW_ENTITY: translate('add_new_patients'),
    ENTITY_NAME: translate('patients'),
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
        createForm={<PatientsForm />}
        updateForm={<PatientsForm isUpdateForm={true} />}
        config={config}
      />
    </>
  );
}
