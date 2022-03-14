import React from 'react'
import * as S from './style'
import * as MUI from '@mui/material/'

import PostItemSettings from '../PostItemSettings'

const CategoryItem = ({ data }) => {
  return (
    <S.CategoryItemContainer>
      <S.CategoryItemTitle>
        {data.title}
      </S.CategoryItemTitle>

      <S.CategoryItemSettings>
        <MUI.TextField 
          id="outlined-basic"
          label={data.postsNumber}
          variant="outlined"
          size="small"
          disabled
          sx={{ 
            width: '46px', 
            height: '40px',
            marginRight: '30px',
          }}
        />

        <PostItemSettings item='category' />
      </S.CategoryItemSettings>
    </S.CategoryItemContainer>
  )
}

export default CategoryItem