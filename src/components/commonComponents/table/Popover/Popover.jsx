import React, { useState } from 'react';
import {
  Input, Select, Popover, Button,
} from 'antd';
import './style.css';

const { Option } = Select;

function PopoverComponent({ handleFilter }) {
  const [state, setstate] = useState({
    firstSelect: 'equal',
    firstInput: '',
    secondSelect: 'and',
    thirdSelect: 'equal',
    secondInput: '',
  });
  const content = (
    <div
      className="PopoverComp"
    >
      <span> Show items with value that:</span>
      <Select
        className="PopoverComp__antSelect"
        showSearch
        defaultValue="equal"
        value={state.firstSelect}
        onChange={(e) => setstate({ ...state, firstSelect: e })}
      >
        <Option value="equal">is equal to</Option>
        <Option value="notEqual">is not equal to</Option>
      </Select>
      <Input type="text" value={state.firstInput} onChange={(e) => setstate({ ...state, firstInput: e.target.value })} />
      <Select
        className="PopoverComp__antSelect PopoverComp__antSelect--andOrSelect"
        showSearch
        defaultActiveFirstOption
        defaultValue="and"
        value={state.secondSelect}
        onChange={(e) => setstate({ ...state, secondSelect: e })}
      >
        <Option value="and">And</Option>
        <Option value="OR">OR</Option>
      </Select>
      <Select
        className="PopoverComp__antSelect"
        showSearch
        defaultActiveFirstOption
        defaultValue="equal"
        value={state.thirdSelect}
        onChange={(e) => setstate({ ...state, thirdSelect: e })}
      >
        <Option value="equal">is equal to</Option>
        <Option value="notEqual">is not equal to</Option>
      </Select>
      <Input type="text" value={state.secondInput} onChange={(e) => setstate({ ...state, secondInput: e.target.value })} />
      <div className="Popover__buttonsContainer">
        <Button>
          Filter
        </Button>
        <Button onClick={() => setstate({
          firstSelect: 'equal',
          firstInput: '',
          secondSelect: 'and',
          thirdSelect: 'equal',
          secondInput: '',
        })}
        >
          Clear
        </Button>
      </div>
    </div>
  );
  return (
    <Popover placement="bottom" content={content} trigger="click">
      <Button className="PopoverComp--popButton" id="filterButton" name="filter">
        {' '}
        <img src="/icons/filter-list-1779906.svg" alt="filter" width="33px" />
      </Button>
    </Popover>
  );
}

export default PopoverComponent;
