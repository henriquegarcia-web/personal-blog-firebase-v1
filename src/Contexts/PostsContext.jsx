import React, { createContext, useEffect, useState } from "react";

export const PostsContext = createContext();

const PostsProvider = ({ children }) => {

  // const [view, setView] = useState(<Posts />)

  return (
    <PostsContext.Provider
      value={{
        // view,
        // setView,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export default PostsProvider;