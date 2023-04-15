import { useContext, useState } from 'react';
import Image from 'next/image'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import ImageLogin from '@/public/images/BackGround_login.png'
  import Logo from '@/public/images/Logo.png'

import { Input } from '../common/Input'
import { Button } from '../common/Button'
import { RegisterContent } from './RegisterContent'

import { GlobalContext } from '@/context/GlobalContext'

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Tiene que ser con formato de email')
    .required('El email es requerido'),
  password: yup.string().required('La contraseña es requerida'),
})

const postLogin = async (data) => {
  const url = "https://sleek-pen-production-f98d.up.railway.app/auth/signIn"

  try {
    const res = await fetch(url, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": data.email,
        "password": data.password,
      })
    })
    const result = await res.json()
    return console.log(result)
  } catch (error) {
    console.log(error)
  }
}

export const LoginModal = () => {
  const [visible, setVisible] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: yupResolver(schema) })
  const { contextDataGlobal, setContextDataGlobal } = useContext(GlobalContext)

  const onSubmit = (data) => {
    reset()
    postLogin(data)
    setContextDataGlobal({
      ...contextDataGlobal,
      modalActive: '',
      showModal: false,
    })
  }
  return (
    <Container>
      <Image
        src={Logo}
        alt="logo"
        className="logo-icon"
        height={100}
        width={300}
      />
      <div className="image">
        <Image src={ImageLogin} alt="login-image" />
      </div>

      {visible ? (
        <div className="form">
          <RegisterContent />
        </div>
      ) : (
        <div className="form">
          <h2>Bienvenido</h2>
          <p>Iniciar sesión con su cuenta</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register('email')}
              registerInput="email"
              placeholder="Ingresar correo"
              label="Ingresar correo"
              errors={errors?.email?.message}
              margin="24px 0 31px"
            />
            <Input
              register={register('password')}
              registerInput="password"
              placeholder="Ingresar clave"
              label="Ingresar clave"
              type="password"
              errors={errors?.password?.message}
              margin="0px 0 10px"
            />
            <div className="section-links">
              <p onClick={() => setVisible(true)}>Registrarme</p>
              <p>Olvide mi clave</p>
            </div>
            <Button
              type="submit"
              text="LOGIN"
              width="200px"
              colorFocus="#25da2d"
              margin="0 0 24px"
            />
          </form>
          <div className="centered">
            <Button
              type="submit"
              text="Login con Facebook"
              width="200px"
              colorFocus="#3B5998"
              secondary="true"
            />
          </div>
        </div>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  position: relative;
  min-width: 824px;
  background: #d1d1d1;
  .image {
    background-color: var(--secondaryViolet1);
    border-radius: 16px 0px 0px 16px;
  }
  .logo-icon {
    position: absolute;
    left: 40px;
    top: 42%;
  }

  .form {
    display: flex;
    flex-direction: column;
    display: flex;
    flex-direction: column;
    padding: 82px 0;
    margin: 0 auto;
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h2 {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 26px;
    }
    p {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 26px;
    }
    .section-links {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0 0 25px;
      width: 100%;
      p {
        cursor: pointer;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 26px;
        color: #120628;
      }
    }
  }
  .centered {
    margin: 0 auto;
  }
`
