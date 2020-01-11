import React, { useReducer, useEffect, useRef } from 'react';
import {
  Table, Button, Select, Icon,
} from 'antd';
import PropTypes from 'prop-types';
import reducer from './reducer/index';
import PopoverComponent from './Popover/Popover';
import ModalComp from './Modal/index';
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
  const handleSort = (e) => {
    dispatch({
      type: 'sort',
      value: e.target.name,
    });
  };
  const handleFilter = (e) => {
  };
  const handleAddRow = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()
    }-${currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
    // uuid as a key would be use in such cases
    // eslint-disable-next-line no-unused-expressions
    state.SelectValue && dispatch({
      type: 'addRow',
      value: {
        key: state.data.length + 1,
        name: state.SelectValue,
        date: formattedDate,
      },
    });
  };
  const handleSelectChange = (e) => {
    dispatch({ type: 'SelectValue', value: e });
  };
  const handleClearSelect = () => {
    // eslint-disable-next-line no-unused-expressions
    state.SelectValue && dispatch({ type: 'clearSelect' });
  };
  const showModal = (rowIndex) => {
    dispatch({ type: 'showModal', value: rowIndex });
  };
  const hideModal = () => {
    dispatch({ type: 'hideModal' });
  };
  const removeRow = () => {
    dispatch({ type: 'removeRow', value: state.Modal.rowIndex });
  };

  return (
    <>
      <div className="TableComp__antTable">
        <div className="TableComp__antTable__MainSelectContainer">
          <Select
            className="TableComp__antTable--antSelect"
            showSearch
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
            <Icon
              type={[1, null].includes(state.sort.sortByName) ? 'arrow-up' : 'arrow-down'}
              className={state.sort.sortByName ? 'TableComp__tableHeader--sortActive' : 'TableComp__tableHeader--sortInActive'}
            />
          </Button>
          <Button className="TableComp__tableHeade--dateSortButtn" id="dateSortButton" name="date" onClick={handleSort}>
            Date
            <Icon
              type={[1, null].includes(state.sort.sortByDate) ? 'arrow-up' : 'arrow-down'}
              className={state.sort.sortByDate ? 'TableComp__tableHeader--sortActive' : 'TableComp__tableHeader--sortInActive'}
            />
          </Button>
          <PopoverComponent handleFilter={handleFilter} />
        </div>
        <Table
          columns={columns(showModal)}
          showHeader={false}
          pagination={false}
          dataSource={state.data}
        />
      </div>
      <ModalComp removeRow={removeRow} visible={state.Modal.visible} hideModal={hideModal} />
    </>
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
