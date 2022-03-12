import React, { createContext, useEffect, useState } from "react";

import Overview from "../Containers/AdminViews/Overview";

export const ViewContext = createContext();

const ViewProvider = ({ children }) => {

  const [view, setView] = useState(<Overview />)

  return (
    <ViewContext.Provider
      value={{
        view,
        setView,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
}

export default ViewProvider;
