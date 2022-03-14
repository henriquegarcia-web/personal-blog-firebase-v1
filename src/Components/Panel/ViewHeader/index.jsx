import React from 'react'

import * as S from './style'

const ViewHeader = ({ viewTitle, viewSubtitle }) => {
  return (
    <S.ViewHeaderContainer>
      <S.ViewHeaderTitle>{viewTitle}</S.ViewHeaderTitle>
      <S.ViewHeaderSubtitle>{viewSubtitle}</S.ViewHeaderSubtitle>
    </S.ViewHeaderContainer>
  )
}

export default ViewHeader