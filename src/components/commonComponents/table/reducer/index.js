
const reducer = (state, action) => {
  switch (action.type) {
    case 'updateData':
      return {
        ...state,
        data: action.value,
      };
    default:
      return state;
  }
};


export default reducer;
