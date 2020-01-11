
const sortByName = (state, sortStatus) => state.data.sort((a, b) => (
  (b.name.toLowerCase() > a.name.toLowerCase()) ? 1 : -1) * (sortStatus || -1));
const sortByDate = (state, sortStatus) => state.data.sort((a, b) => (
  new Date(b.date).getTime() - new Date(a.date).getTime()) * (sortStatus || -1));

const reducer = (state, action) => {
  switch (action.type) {
    case 'sort':
      // eslint-disable-next-line no-case-declarations
      let modifiedData = [];
      // eslint-disable-next-line no-case-declarations
      let newSort;
      if (action.value === 'name') {
        modifiedData = sortByName(state, state.sort.sortByName);
        newSort = { sortByName: state.sort.sortByName * -1 || 1, sortByDate: null };
      } else if (action.value === 'date') {
        modifiedData = sortByDate(state, state.sort.sortByDate);
        newSort = { sortByDate: state.sort.sortByDate * -1 || 1, sortByName: null };
      } else {
        modifiedData = state.data;
        newSort = { sortByName: null, sortByDate: null };
      }
      return {
        ...state,
        sort: newSort,
        data: modifiedData,
      };
    case 'filter':
      return {
        ...state,
        filter: {
          firstFilter: action.value.firstFilter || null,
          secondFilter: action.value.secondFilter || null,
        },
      };
    case 'updateData':
      return {
        ...state,
        data: action.value,
      };
    case 'showModal':
      return {
        ...state,
        Modal: {
          visible: true,
          rowIndex: action.value,
        },
      };
    case 'hideModal':
      return {
        ...state,
        Modal: {
          visible: false,
          rowIndex: null,
        },
      };
    case 'addRow':
      state.data.push(action.value);
      return {
        ...state,
        data: state.sort.sortByDate ? sortByDate(state, state.sort.sortByDate * -1)
          : (state.sort.sortByName && sortByName(state, state.sort.sortByName * -1)) || state.data,
      };
    case 'removeRow':
      state.data.splice(state.Modal.rowIndex, 1);
      return {
        ...state,
        Modal: {
          visible: false,
          rowIndex: null,
        },
      };
    case 'SelectValue':
      return {
        ...state,
        SelectValue: action.value,
      };
    case 'clearSelect':
      return {
        ...state,
        SelectValue: null,
      };
    default:
      return state;
  }
};


export default reducer;
