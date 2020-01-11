import React, { useReducer, useEffect } from 'react';
import {
  Table, Button, Select,
} from 'antd';
import PropTypes from 'prop-types';
import reducer from './reducer/index';
import columns from './columns';
import './style.css';

const { Option } = Select;
const initialState = {
  sort: {
    sortByName: null,
    sortByDate: null,
  },
  filter: {
    firstFilter: null,
    secondFilter: null,
  },
  data: [],
  Modal: {
    visible: false,
    rowIndex: null,
  },
  SelectValue: null,
};


const TableComponent = ({ data, JobRoles }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({
      type: 'updateData',
      value: data,
    });
  }, []);
  const handleSort = () => {
  };
  const handleFilter = (e) => {
  };
  const handleAddRow = () => {
  };
  const handleSelectChange = () => {
  };
  const handleClearSelect = () => {};
  const showModal = () => {
  };
  const removeRow = () => {
  };

  return (
    <div className="TableComp__antTable">
      <div className="TableComp__antTable__MainSelectContainer">
        <Select
          className="TableComp__antTable--antSelect"
          placeholder="Select a Role"
          onChange={handleSelectChange}
          value={state.SelectValue}
        >
          {JobRoles.map((role, index) => <Option key={index} value={role}>{role}</Option>)}
        </Select>
        <div className="TableComp__antTable--selectButtnsContainer">
          <Button id="addButton" name="add" onClick={handleAddRow}>Add</Button>
          <Button id="clearButton" name="clear" onClick={handleClearSelect}>Clear</Button>
        </div>
      </div>
      <div className="TableComp__tableHeader">
        <Button id="nameSortButton" name="name" onClick={handleSort}>
            User Role
        </Button>
        <Button className="TableComp__tableHeade--dateSortButtn" id="dateSortButton" name="date" onClick={handleSort}>
            Date
        </Button>
      </div>
      <Table
        columns={columns(showModal)}
        showHeader={false}
        pagination={false}
        dataSource={state.data}
      />
    </div>
  );
};

TableComponent.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  JobRoles: PropTypes.instanceOf(Array),
};
TableComponent.defaultProps = {
  JobRoles: [],
};

export default TableComponent;
