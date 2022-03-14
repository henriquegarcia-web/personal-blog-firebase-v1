import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'
import * as MUI from '@mui/material/'

import {
  FiHome,
  FiLayout,
  FiFileText,
  FiFolder,
  FiUsers,
  FiActivity,
  FiSettings,
  FiBell,
  FiExternalLink,
} from 'react-icons/fi'

import Overview from '../../Containers/AdminViews/Overview'
import Template from '../../Containers/AdminViews/Template'
import Posts from '../../Containers/AdminViews/Posts'
import Categories from '../../Containers/AdminViews/Categories'
import Users from '../../Containers/AdminViews/Users'
import Analytics from '../../Containers/AdminViews/Analytics'
import Settings from '../../Containers/AdminViews/Settings'
import UserAccount from '../../Containers/AdminViews/_HiddenViews/UserAccount'

import { ViewContext } from '../../Contexts/ViewContext'

const Panel = () => {

  const viewContext = useContext(ViewContext);

  const [currentView, setCurrentView] = useState(viewContext.view)
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    setCurrentView(viewContext.view)
  }, [viewContext])

  return (
    <S.PanelPage>

      <S.PanelMenu>
        <S.MenuHeader>
          <S.PanelLogo>
            Dashboard v1
          </S.PanelLogo>
        </S.MenuHeader>
        <S.MenuContainer>

          <MenuInputs setView={setCurrentView} />
          
        </S.MenuContainer>
      </S.PanelMenu>

      <S.PanelView>
        <S.ViewHeader>
          <S.ViewHeaderSettings>
            <MUI.IconButton>
              <FiBell />
            </MUI.IconButton>
            <MUI.IconButton>
              <FiExternalLink />
            </MUI.IconButton>
          </S.ViewHeaderSettings>
          <S.ViewHeaderInfos>
            <MUI.Avatar 
              sx={{ 
                bgcolor: 'orange', 
                cursor: 'pointer' 
              }}
              onClick={() => setToggleMenu(!toggleMenu)}
            >HG</MUI.Avatar>

            {toggleMenu && (
              <HeaderMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
            )}

          </S.ViewHeaderInfos>

          {toggleMenu && (
            <S.InfosModalClickListener
              onClick={() => setToggleMenu(!toggleMenu)}
            ></S.InfosModalClickListener>
          )}
        </S.ViewHeader>

        <S.ViewContainer>
          {currentView}
        </S.ViewContainer>

      </S.PanelView>

    </S.PanelPage>
  )
}

export default Panel

// ---------------------- MENU HEADER 

export const HeaderMenu = ({ toggleMenu, setToggleMenu}) => {

  const viewContext = useContext(ViewContext);

  return (
    <S.ViewHeaderInfosModal>
      <S.InfosModalInput>
        <MUI.Button
          variant="outlined"
          size="small" 
          onClick={() => {
            setToggleMenu(!toggleMenu)
            viewContext.setView(<UserAccount />)
          }}
          sx={{
            width: '100%',
            marginBottom: '10px',
          }}
        >
          Minha conta
        </MUI.Button>
      </S.InfosModalInput>
      <S.InfosModalInput>
        <Link to='/login'>
          <MUI.Button
            variant="outlined"
            size="small"
            sx={{
              width: '100%',
            }}
          >
            Sair
          </MUI.Button>
        </Link>
      </S.InfosModalInput>
    </S.ViewHeaderInfosModal>
  )
}

// ---------------------- MENU INPUTS

export const MenuInputs = ({ setView }) => {
  return (
    <>
      <MUI.Button 
        variant="outlined" 
        startIcon={<FiHome />} 
        onClick={() => setView(<Overview />)}
        disabled
      >
        Overview
      </MUI.Button>
      <MUI.Button 
        variant="outlined" 
        startIcon={<FiLayout />} 
        onClick={() => setView(<Template />)}
        disabled
      >
        Template
      </MUI.Button>
      <MUI.Button 
        variant="outlined" 
        startIcon={<FiFileText />} 
        onClick={() => setView(<Posts />)}
      >
        Posts
      </MUI.Button>
      <MUI.Button 
        variant="outlined" 
        startIcon={<FiFolder />} 
        onClick={() => setView(<Categories />)}
      >
        Categorias
      </MUI.Button>
      <MUI.Button 
        variant="outlined" 
        startIcon={<FiUsers />} 
        onClick={() => setView(<Users />)}
      >
        Usuários
      </MUI.Button>
      <MUI.Button 
        variant="outlined" 
        startIcon={<FiActivity />} 
        onClick={() => setView(<Analytics />)}
        disabled
      >
        Analytics
      </MUI.Button>
      <MUI.Button 
        variant="outlined" 
        startIcon={<FiSettings />} 
        onClick={() => setView(<Settings />)}
        disabled
      >
        Configurações
      </MUI.Button>
    </>
  )
}
