import React from 'react';
import { Icon } from 'antd';

const columns = (showModal) => [{
  title: 'User Role',
  dataIndex: 'name',
  key: 'name',
  width: '39%',
}, {
  title: 'Date',
  dataIndex: 'date',
  key: 'date',
  align: 'center',
}, {
  title: 'Delete',
  dataIndex: 'delete',
  key: 'delete',
  align: 'right',
  render: (text, record, index) => (
    <Icon
      type="delete"
      onClick={() => showModal(index)}
      style={{ marginRight: '15px', fontSize: '15px' }}
    />
  ),
}];

export default columns;
