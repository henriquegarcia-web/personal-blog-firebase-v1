import styled from "styled-components";

import { View, ViewHeaderSettings } from '../../../globalStyles'

export const CategoriesView = styled(View)`

`

export const CategoriesHeader = styled(ViewHeaderSettings)`
  margin-bottom: 20px;

  background-color:rgba(0, 0, 0, 0.03);
`

export const CategoriesList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 170px);
  overflow: auto;
`