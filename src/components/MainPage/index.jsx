import React, { useEffect, useState } from 'react';
import Table from '../commonComponents/table/index';
import { data, JobRoles } from '../../DummyData/data';

export const MainContext = React.createContext();
const MainPage = () => {
  const [state, setState] = useState({
    data: [],
    sort: '',
    filter: '',
  });
  // simulate fetching the data after first render, and execute for once
  useEffect(() => {
    setState({ ...state, data });
  }, []);

  return (
    <>
      <Table data={data} JobRoles={JobRoles} />
    </>
  );
};

export default MainPage;
