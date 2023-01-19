import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();
const initialState = {
    value: ""
  };

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <AppContext.Provider value={{ ...state, dispatch }}>{children}</AppContext.Provider>;
}

const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
  export { useGlobalContext, AppProvider };
  