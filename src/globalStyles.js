import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Lexend Deca', sans-serif;
    text-decoration: none;
  }

  :root {
    --border-radius: 8px;
    --padding: 20px;

    --link: #0583d2;
    --box-shadow: rgba(0, 0, 0, 0.1);
    --border-light: rgba(0, 0, 0, 0.05);
  }

  // ------ SCROLL BAR

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    z-index: 1000;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
`

export default GlobalStyle

// --------------------------------- COMPONENTES

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`