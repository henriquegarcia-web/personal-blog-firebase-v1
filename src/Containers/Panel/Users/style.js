import styled from "styled-components";

import { View, ViewHeaderSettings } from '../../../globalStyles'

export const UsersView = styled(View)`

`

export const UsersHeader = styled(ViewHeaderSettings)`
  margin-bottom: 20px;

  background-color:rgba(0, 0, 0, 0.03);
`

// ------------------------- LISTA DE USUÁRIOS

export const UsersList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 170px);
  overflow: auto;
`

export const UsersItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: .2s;

  border: 1px solid var(--border-light);

  &:hover {
    background: var(--hover-soft);
  }
`

export const UserItemInfos = styled.div`
  display: flex;
`

export const InfoImageContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  overflow: hidden;
  margin-right: 10px;
`

export const InfoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const UserItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const InfoName = styled.div`
  font-size: 17px;
  font-weight: 400;
  margin-bottom: 4px;
  color:rgba(0, 0, 0, 0.85);
`

export const InfoNickName = styled.div`
  font-size: 15px;
  font-weight: 300;
  color:rgba(0, 0, 0, 0.6);
`

export const UserItemDetails = styled.div`
  display: flex;
  align-items: center;
`

export const UserInfoTag = styled.div`
  width: fit-content;
  border-radius: 6px;
  padding: 5px 10px;
  margin-right: 20px;
  color: white;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  background-color:rgba(0, 0, 0, 0.8);
`