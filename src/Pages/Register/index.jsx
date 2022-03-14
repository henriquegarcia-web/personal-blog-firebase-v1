import React from 'react'
import { Link } from 'react-router-dom'

import {
  RegisterPage,
  RegisterContainer,
} from './style'

import {
  TextField,
  Button,
} from '@mui/material/'

const Register = () => {
  return (
    <RegisterPage>
      <RegisterContainer>

        <div className='register_container__header'>
          <p>Crie uma conta</p>
        </div>

        <div className='register_container__form'>
          <form action="">

            <TextField 
              label="Seu nome completo" 
              size="small"
              fullWidth
              sx={{
                marginBottom: '10px',
              }}
            />

            <TextField 
              label="Seu e-mail" 
              size="small"
              fullWidth
              sx={{
                marginBottom: '20px',
              }}
            />

            <TextField 
              label="Sua senha" 
              size="small"
              fullWidth
              sx={{
                marginBottom: '10px',
              }}
            />

            <TextField 
              label="Repita a senha" 
              size="small"
              fullWidth
            />

            <div className='register_container__form__links'>
              <Link to='/login'>Já possui uma conta?</Link>
            </div>

            <Button variant="contained">Registrar-se</Button>

          </form>
        </div>

      </RegisterContainer>
    </RegisterPage>
  )
}

export default Register