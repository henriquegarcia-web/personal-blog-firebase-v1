import React, { useState, useEffect } from 'react'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import {
  AddPostModalContainer,
  Modal,
  ModalHeader,
  ModalHeaderTitle,
  ModalPostDetails,
  ModalPostSelectors,
  ModalCategories,
  ModalTags,
} from './style'

import {
  Button,
  IconButton,
  TextField,
  Select,
  MenuItem,
  Stack,
  ListItem,
  Chip,
} from '@mui/material/'

import {
  FiX,
} from 'react-icons/fi'

const AddPostModal = ({ addPostModal, setAddPostModal }) => {

  // ---------------------------------------------------------------

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  // ---------------------------------------------------------------

  const categories = ['React', 'Redux', 'Typescript']
  const [category, setCategory] = useState('Categorias');

  const handleChange = (e) => {
    setCategory(e.target.value);
  };  

  // ---------------------------------------------------------------

  return (
    <AddPostModalContainer>
      
      <Modal>
        <ModalHeader>
          <ModalHeaderTitle>
            Criar publicação
          </ModalHeaderTitle>
          <Button
            variant="outlined" 
            onClick={() => {}}
          >
            Salvar rascunho
          </Button>
          <Button
            variant="outlined" 
            onClick={() => {}}
          >
            Publicar
          </Button>
          <IconButton
            onClick={() => {setAddPostModal(!addPostModal)}}
          >
            <FiX />
          </IconButton>
        </ModalHeader>

        <ModalPostDetails>
          <TextField 
            hiddenLabel
            id="outlined-basic"
            placeholder="Adicionar um título"
            variant="standard"
            fullWidth
            inputProps={{style: {fontSize: 30}}}
            InputLabelProps={{style: {fontSize: 25}}}
          />

          <ModalPostSelectors>
            <ModalCategories>
              <Select 
                value={category} 
                onChange={handleChange}
                defaultValue='none'
                fullWidth
              >
                <MenuItem value="Categorias" disabled>Selecionar categoria</MenuItem>
                {categories.map((category) => (
                  <MenuItem
                    key={category}
                    value={category}
                  >
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </ModalCategories>

            <ModalTags>
              <TextField 
                hiddenLabel
                placeholder="Adicionar tag"
                variant="standard"
                sx={{
                  width: '160px',
                  marginRight: '10px'
                }}
              />
              <Stack
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  height: 56,
                }}
              >
                {chipData.map((data) => {
                  return (
                    <Chip
                      key={data.key}
                      variant="outlined"
                      label={data.label}
                      onDelete={handleDelete(data)}
                      sx={{ marginRight: 1 }}
                    />
                  );
                })}
              </Stack>
            </ModalTags>
          </ModalPostSelectors>

          <ReactQuill className='quill-teste' />

        </ModalPostDetails>
      </Modal>

    </AddPostModalContainer>
  )
}

export default AddPostModal