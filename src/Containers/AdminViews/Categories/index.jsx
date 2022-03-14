import React from 'react'
import * as S from './style'
import * as MUI from '@mui/material/'

import ViewHeader from '../../../Components/Panel/ViewHeader'
import CategoryItem from '../../../Components/Panel/CategoryItem'

const Categories = () => {

  const categoriesProps = [
    { id: 1, title: 'Soft Skills', postsNumber: '04' }, 
    { id: 2, title: 'React', postsNumber: '10' },
    { id: 3, title: 'Gestão de Projetos', postsNumber: '00' }
  ]

  return (
    <S.CategoriesView>
      <ViewHeader 
        viewTitle='Categorias' 
        viewSubtitle='Criar, editar e ver categorias'
      />

      <CategoriesHeader />

      <S.CategoriesList>
        {categoriesProps.map((categotyData) => (
          <CategoryItem key={categotyData.id} data={categotyData} />
        ))}
      </S.CategoriesList>
    </S.CategoriesView>
  )
}

export default Categories

// ------------------------- HEADER DA CATEGORIA

export const CategoriesHeader = () => {
  return (
    <S.CategoriesHeader>
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
      <MUI.Button
        variant="outlined" 
        onClick={() => {}}
        sx={{ 
          marginLeft: 'auto',
          backgroundColor: 'white',
        }}
      >
        Criar pacote
      </MUI.Button>
    </S.CategoriesHeader>
  )
}
