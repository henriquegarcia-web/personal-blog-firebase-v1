import React, { useEffect, useState } from 'react'
import * as S from './style'
import * as MUI from '@mui/material/'

import ViewHeader from '../../../../Components/Panel/ViewHeader'

const UserAccount = () => {
  return (
    <S.UserAccount>
      <ViewHeader 
        viewTitle='Sua conta' 
        viewSubtitle='Visualize e edite sua conta'
      />

      <UserAccountList />
    </S.UserAccount>
  )
}

export default UserAccount

// ------------------------- FORMULÁRIO DOS USUÁRIOS

const UserAccountList = () => {

  // this.refs.password.getValue()

  const [isModified, setIsModified] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleInputName = (input) => {
    setName(input.target.value)
  }

  const handleInputEmail = (input) => {
    setEmail(input.target.value)
  }

  const handleInputPassword = (type, input) => {
    setPassword(input.target.value)
  }

  useEffect(() => {
    if (name === '' && email === '' && password === '') {
      setIsModified(false)
    } else {
      setIsModified(true)
    }
  }, [name, email, password])
  

  return (
    <S.UserAccountList>
      <div>
        <MUI.TextField 
          placeholder="Alterar seu nome"
          label='Henrique Pereira Garcia'
          variant="outlined"
          style={{
            width: 'calc(60% - 10px)',
            marginRight: '10px',
          }}
          onChange={(e) => handleInputName(e)}
        />
        <MUI.TextField 
          value='(51) 9 9307-7788'
          variant="outlined"
          style={{
            width: '40%',
          }}
          disabled
        />
      </div>

      <div>
        <MUI.TextField 
          placeholder="Alterar e-mail"
          label='https.henriquegarcia@gmail.com'
          variant="outlined"
          style={{
            width: 'calc(50% - 10px)',
            marginRight: '10px',
          }}
          onChange={(e) => handleInputEmail(e)}
        />
        <MUI.TextField 
          placeholder="Nova senha"
          // ref='password'
          hintText="Password"
          floatingLabelText="Password"
          type="password"
          style={{
            width: 'calc(25% - 5px)',
            marginRight: '5px',
          }}
          onChange={(e) => handleInputPassword('main_password', e)}
        />
        <MUI.TextField 
          placeholder="Confirmar nova senha"
          // ref='password'
          hintText="Password"
          floatingLabelText="Password"
          type="password"
          style={{
            width: 'calc(25% - 5px)',
            marginLeft: '5px',
          }}
          onChange={(e) => handleInputPassword('confirm_password', e)}
        />
      </div>

      <div>
        <MUI.Button
          variant="outlined" 
          onClick={() => {}}
          sx={{ marginLeft: 'auto' }}
          disabled={!isModified}
        >
          {isModified ? (
            'Aplicar alterações'
          ) : (
            'Nenhuma alteração'
          )}
        </MUI.Button>
      </div>
    </S.UserAccountList>
  )
}
