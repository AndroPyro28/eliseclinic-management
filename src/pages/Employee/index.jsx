import React from 'react';

import useLanguage from '@/locale/useLanguage';
import CrudModule from '@/modules/CrudModule/CrudModule';
import EmployeeForm from '@/forms/EmployeeForm';
import dayjs from 'dayjs';
export default function Employee() {
  const translate = useLanguage();
  const entity = 'employee';
  const searchConfig = {
    displayLabels: ['name'],
    searchFields: 'name',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['name'];

  const dataTableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: translate('address'),
      dataIndex: 'address',
    },
    {
      title: translate('Birthday'),
      dataIndex: 'birthday',
      render: (date) => {
        return dayjs(date).format('MM/DD/YYYY');
      },
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: 'Job Title',
      dataIndex: 'jobTitle',
    },
    {
      title: 'Department',
      dataIndex: 'department',
    },
  ];

  const readColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: translate('address'),
      dataIndex: 'address',
    },
    {
      title: translate('Birthday'),
      dataIndex: 'birthday',
      isDate: true,
    },
    {
      title: translate('gender'),
      dataIndex: 'gender',
    },

    {
      title: 'Job Title',
      dataIndex: 'jobTitle',
    },
    {
      title: translate('Department'),
      dataIndex: 'department',
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('employee'),
    DATATABLE_TITLE: translate('employee_list'),
    ADD_NEW_ENTITY: translate('add_new_employee'),
    ENTITY_NAME: translate('employee'),
    CREATE_ENTITY: translate('save'),
    UPDATE_ENTITY: translate('update'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<EmployeeForm />}
      updateForm={<EmployeeForm isUpdateForm={true} />}
      config={config}
    />
  );
}
