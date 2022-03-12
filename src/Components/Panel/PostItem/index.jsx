import React from 'react'
import PostItemSettings from '../PostItemSettings'
import * as S from './style'

const PostItem = ({ data }) => {
  return (
    <S.PostItemContainer>
      <S.PostItemBanner>
        <S.PostItemBannerImage src={data.banner} />
      </S.PostItemBanner>

      <S.PostItemDetails>
        <S.PostItemDetailsTitle>
          {data.title}
        </S.PostItemDetailsTitle>
        <S.PostItemDetailsDate>
          Publicado em: {data.createAt}
        </S.PostItemDetailsDate>
      </S.PostItemDetails>

      <PostItemSettings item='posts' />
    </S.PostItemContainer>
  )
}

export default PostItem