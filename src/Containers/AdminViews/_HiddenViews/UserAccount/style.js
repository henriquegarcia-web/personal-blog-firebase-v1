import styled from "styled-components";

import { View, ViewHeaderSettings } from '../../../../globalStyles'

export const UserAccount = styled(View)`

`

export const UserAccountHeader = styled(ViewHeaderSettings)`
  margin-bottom: 20px;
`

export const UserAccountList = styled.div`
  display: flex;
  flex-wrap: wrap;

  div {
    display: flex;
    width: 100%;
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`