const setSort = (state = { sortCase: 'ALL' }, action: any) => {
  switch (action.type) {
    case 'SORT_TABLE':
      return action.sortCase;
    default:
      return state;
  }
};

export default setSort;
