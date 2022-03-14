import React from 'react'
import * as S from './style'
import * as MUI from '@mui/material/'
import * as I from 'react-icons/fi'

const PostItemSettings = ({ item }) => {
  return (
    <>
      {item === 'posts' && (
        <S.PostItemSettings>
          <MUI.IconButton>
            <I.FiEye />
          </MUI.IconButton>
          <MUI.IconButton>
            <I.FiEdit />
          </MUI.IconButton>
          <MUI.IconButton>
            <I.FiDelete />
          </MUI.IconButton>
          <MUI.IconButton>
            <I.FiFolder />
          </MUI.IconButton>
        </S.PostItemSettings>
      )}
      
      {item === 'category' && (
        <S.PostItemSettings>
          <MUI.IconButton>
            <I.FiEye />
          </MUI.IconButton>
          <MUI.IconButton>
            <I.FiEdit />
          </MUI.IconButton>
          <MUI.IconButton>
            <I.FiDelete />
          </MUI.IconButton>
        </S.PostItemSettings>
      )}
      
      {item === 'user' && (
        <S.PostItemSettings>
          <MUI.IconButton>
            <I.FiEye />
          </MUI.IconButton>
        </S.PostItemSettings>
      )}
      
    </>
  )
}

export default PostItemSettings