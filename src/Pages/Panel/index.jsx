import React from 'react'

import {
  PanelPage,
  PanelMenu,
  PanelView,
  MenuHeader,
  ViewHeader,
  ViewContainer,
  PanelLogo,
  MenuContainer,
  ViewHeaderSettings,
  ViewHeaderSearch,
  ViewHeaderInfos,
} from './style'

import {
  Button,
  IconButton,
  TextField,
  Avatar
} from '@mui/material/'

import {
  FiHome,
  FiLayout,
  FiFileText,
  FiFolder,
  FiUsers,
  FiSliders,
  FiSettings,
  FiBell,
  FiExternalLink,
} from 'react-icons/fi'

const Panel = () => {
  return (
    <PanelPage>

      <PanelMenu>
        <MenuHeader>
          <PanelLogo>
            Dashboard v1
          </PanelLogo>
        </MenuHeader>
        <MenuContainer>
          <Button variant="outlined" startIcon={<FiHome />}>
            Overview
          </Button>
          <Button variant="outlined" startIcon={<FiLayout />}>
            Template
          </Button>
          <Button variant="outlined" startIcon={<FiFileText />}>
            Posts
          </Button>
          <Button variant="outlined" startIcon={<FiFolder />}>
            Categorias
          </Button>
          <Button variant="outlined" startIcon={<FiUsers />}>
            Usuários
          </Button>
          <Button variant="outlined" startIcon={<FiSliders />}>
            Analytics
          </Button>
          <Button variant="outlined" startIcon={<FiSettings />}>
            Configurações
          </Button>
        </MenuContainer>
      </PanelMenu>

      <PanelView>
        <ViewHeader>
          <ViewHeaderSettings>
            <IconButton>
              <FiBell />
            </IconButton>
            <IconButton>
              <FiExternalLink />
            </IconButton>
          </ViewHeaderSettings>
          <ViewHeaderSearch>
            <TextField 
              id="outlined-basic"
              label="Pesquisar"
              variant="outlined"
              size="small"
              fullWidth
              disabled
            />
          </ViewHeaderSearch>
          <ViewHeaderInfos>
            <Avatar sx={{ bgcolor: 'orange', cursor: 'pointer' }}>HG</Avatar>
          </ViewHeaderInfos>
        </ViewHeader>

        <ViewContainer>

        </ViewContainer>

      </PanelView>

    </PanelPage>
  )
}

export default Panel