import styled from "styled-components";

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  border-radius: var(--border-radius);

  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

  .login_container__header {
    margin-bottom: 40px;

    /* border: 1px solid; */

    p {
      font-size: 20px;
      font-weight: 400;
      text-transform: uppercase;
      text-align: center;
    }
  }

  .login_container__form {
    

    /* border: 1px solid; */

    form {
      display: flex;
      flex-direction: column;

      .login_container__form__links {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin: 5px 0 20px auto;

        a {
          font-size: 15px;
          font-weight: 300;
          margin-bottom: 5px;
  
          color: var(--link);
        }
      }
    }
  }
`