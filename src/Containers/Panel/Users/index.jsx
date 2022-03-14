import React from 'react'
import * as S from './style'
import * as MUI from '@mui/material/'

import ViewHeader from '../../../Components/Panel/ViewHeader'
import PostItemSettings from '../../../Components/Panel/PostItemSettings'

import UserImage from '../../../Assets/UserImage.jpeg'

const Users = () => {
  return (
    <S.UsersView>
      <ViewHeader 
        viewTitle='Usuários' 
        viewSubtitle='Visualize e manuzeie os usuários cadastrados'
      />

      <UsersHeader />

      <S.UsersList>
        <UsersItem />
        <UsersItem />
        <UsersItem />
      </S.UsersList>
    </S.UsersView>
  )
}

export default Users

// ------------------------- HEADER DOS USUÁRIOS

const UsersHeader = () => {
  return (
    <S.UsersHeader>
      <MUI.TextField 
        id="outlined-basic"
        label="Pesquisar"
        variant="outlined"
        size="small"
        sx={{ 
          width: '300px',
          backgroundColor: 'white',
        }}
      />
    </S.UsersHeader>
  )
}

// ------------------------- LISTA DE USUÁRIOS

const UsersItem = () => {
  return (
    <S.UsersItem>
      <S.UserItemInfos>
        <S.InfoImageContainer>
          <S.InfoImage src={UserImage} alt='' />
        </S.InfoImageContainer>
        <S.UserItemInfo>
          <S.InfoName>Henrique Pereira Garcia</S.InfoName>
          <S.InfoNickName>@henriquegarcia-dev</S.InfoNickName>
        </S.UserItemInfo>
      </S.UserItemInfos>

      <S.UserItemDetails>
        <S.UserInfoTag>Adminstrador</S.UserInfoTag>
        <PostItemSettings item='user' />
      </S.UserItemDetails>
    </S.UsersItem>
  )
}