const setSort = (sortCase: any) => {
  return {
    type: 'SORT_TABLE',
    sortCase,
  };
};

export default {
  setSort,
};
