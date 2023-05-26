import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";

const AppContext = React.createContext();
let API = "https://reqres.in/api/users";

const initialState = {
  isLoading: true,
  total_pages: 0,
  page: 1,
  data: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const info = await res.json();
      dispatch({
        type: "GET_USERS",
        payload: {
          data: info.data,
          total_pages: info.total_pages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };

  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };

  useEffect(() => {
    fetchApiData(`${API}?page=${state.page}`);
  }, [state.page]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        getNextPage: getNextPage,
        getPrevPage: getPrevPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
