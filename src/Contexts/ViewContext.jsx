import React, { createContext, useEffect, useState } from "react";

import Posts from "../Containers/AdminViews/Posts";

export const ViewContext = createContext();

const ViewProvider = ({ children }) => {

  const [view, setView] = useState(<Posts />)

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
