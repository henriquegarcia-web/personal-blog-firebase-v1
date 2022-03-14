import React, { useState } from 'react'
import * as S from './style'
import * as MUI from '@mui/material/'
import * as B from 'react-bootstrap'
import * as I from 'react-icons/fi'

const PostItemSettings = ({ item }) => {

  const [editCategoryModal, setEditCategoryModal] = useState(false)
  const [deleteCategoryModal, setDeleteCategoryModal] = useState(false)
  const [viewUserModal, setViewUserModal] = useState(false)

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
          <MUI.IconButton onClick={() => setEditCategoryModal(true)}>
            <I.FiEdit />
          </MUI.IconButton>
          <MUI.IconButton onClick={() => setDeleteCategoryModal(true)}>
            <I.FiDelete />
          </MUI.IconButton>
        </S.PostItemSettings>
      )}
      
      {item === 'user' && (
        <S.PostItemSettings>
          <MUI.IconButton onClick={() => setViewUserModal(true)}>
            <I.FiEye />
          </MUI.IconButton>
        </S.PostItemSettings>
      )}

      {/* ---------- MODAIS CATEGORIA ---------- */}

      <B.Modal
        size="lg"
        show={editCategoryModal}
        onHide={() => setEditCategoryModal(false)}
        centered
      >
        <EditCategoryModal />
      </B.Modal>

      <B.Modal
        size="sm"
        show={deleteCategoryModal}
        onHide={() => setDeleteCategoryModal(false)}
        centered
      >
        <DeleteCategoryModal />
      </B.Modal>  

      {/* ---------- MODAIS USUÁRIOS ---------- */}

      <B.Modal
        size="sm"
        show={viewUserModal}
        onHide={() => setViewUserModal(false)}
        centered
      >
        <ViewUserModal />
      </B.Modal>

    </>
  )
}

export default PostItemSettings

// ---------------------------------- EDIT MODAL CATEGORIA

const EditCategoryModal = () => {
  return (
    <>
      <B.Modal.Header closeButton>
        Editar categoria
      </B.Modal.Header>
      <B.Modal.Body>
        <div>
          <MUI.TextField 
            label="Editar nome da categoria"
            variant="outlined"
            size="small"
            sx={{ 
              width: 'calc(100% - 140px)',
            }}
          />
          <MUI.Button
            variant="outlined" 
            onClick={() => {}}
            sx={{
              width: '120px',
              height: '40px',
              marginLeft: '20px',
            }}
          >
            Confirmar
          </MUI.Button>
        </div>
      </B.Modal.Body>
    </>
  )
}

// ---------------------------------- DELETE MODAL CATEGORIA

const DeleteCategoryModal = () => {
  return (
    <>
      <B.Modal.Header closeButton>
        Excluir categoria
      </B.Modal.Header>
      <B.Modal.Body>
        <p>Tem certeza de que deseja excluir está categoria?</p>

        <MUI.Button
          variant="outlined" 
          onClick={() => {}}
          sx={{
            display: 'flex',
            width: '120px',
            height: '40px',
            marginLeft: 'auto',
          }}
        >
          Confirmar
        </MUI.Button>
      </B.Modal.Body>
    </>
  )
}

// ---------------------------------- VIEW USER MODAL

const ViewUserModal = () => {
  return (
    <>
      <B.Modal.Header closeButton>
        Dados do usuário
      </B.Modal.Header>
      <B.Modal.Body>
        <p><b>Henrique Pereira Garcia</b></p>
        <p>@henriquegarcia-dev</p>
        <p><b>Administrador</b></p>
        <br/>

        <MUI.Button
          size='sm'
          variant="outlined" 
          onClick={() => {}}
          fullWidth
          sx={{ marginBottom: '10px' }}
        >
          Tornar Administrador
        </MUI.Button>
        <MUI.Button
          size='sm'
          variant="outlined" 
          onClick={() => {}}
          fullWidth
        >
          Block
        </MUI.Button>
      </B.Modal.Body>
    </>
  )
}
