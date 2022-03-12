import React from 'react'
import * as S from './style'
import * as MUI from '@mui/material/'

import ViewHeader from '../../../Components/Panel/ViewHeader'
import PackageItem from '../../../Components/Panel/PackageItem'

const Packages = () => {

  const categoriesProps = [
    { id: 1, title: 'Soft Skills', postsNumber: '04' }, 
    { id: 2, title: 'React', postsNumber: '10' },
    { id: 3, title: 'Gestão de Projetos', postsNumber: '00' }
  ]

  return (
    <S.CategoriesView>
      <ViewHeader 
        viewTitle='Pacotes de dados' 
        viewSubtitle='Criar, editar e ver pacotes'
      />

      <CategoriesHeader />

      <S.CategoriesList>
        {categoriesProps.map((categotyData) => (
          <PackageItem key={categotyData.id} data={categotyData} />
        ))}
      </S.CategoriesList>
    </S.CategoriesView>
  )
}

export default Packages

// ------------------------- HEADER DA CATEGORIA

export const CategoriesHeader = () => {
  return (
    <S.CategoriesHeader>
      <MUI.TextField 
        id="outlined-basic"
        label="Pesquisar"
        variant="outlined"
        size="small"
        sx={{ width: '300px' }}
      />
      <MUI.Button
        variant="outlined" 
        onClick={() => {}}
        sx={{ marginLeft: 'auto' }}
      >
        Criar pacote
      </MUI.Button>
    </S.CategoriesHeader>
  )
}
