const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "NEXT_PAGE":
      let pageNumInc = state.page + 1;
      if (pageNumInc > state.total_pages) {
        pageNumInc = state.total_pages;
      }
      return {
        ...state,
        page: pageNumInc,
      };
    case "PREV_PAGE":
      let pageNum = state.page - 1;
      if (pageNum < 1) {
        pageNum = 1;
      }
      return {
        ...state,
        page: pageNum,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_USERS":
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        total_pages: action.payload.total_pages,
      };
  }
  return state;
};

export default reducer;
