import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useContext } from 'react'
import { GlobalContext } from '@/context/GlobalContext'

import { Input } from '../common/Input'
import { Button } from '../common/Button'

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Tiene que ser con formato de email')
    .required('El email es requerido'),
  password: yup
    .string()
    .min(8, 'La contraseña debe tener minimo 8 letras')
    .max(32)
    .required('La contraseña es requerida'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas deben ser iguales')
    .required('Campo requerido'),
  lastName: yup.string().required('Campo requerido'),
  name: yup.string().required('Campo requerido'),
})


export const RegisterContent = () => {

  const { setToken, setUser, contextDataGlobal, setContextDataGlobal } = useContext(GlobalContext)

  const postRegister = async (data) => {
    const url = "https://sleek-pen-production-f98d.up.railway.app/auth/signUp"
  
    try {
      const res = await fetch(url, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "name": data.name,
          "lastName": data.lastName,
          "email": data.email,
          "password": data.password,
          "address": "string",
          "phone": "12123"
        })
      })
      const result = await res.json()
      setToken(result.body.token)
      setUser({
        'avatar': result.body.avatar,
        'email': result.body.email,
        'id': result.body.id,
        'lastName': result.body.lastName,
        'name': result.body.name,
        'token': result.body.token,
      })

      if (result.statusCode === 'OK') {
        setContextDataGlobal({
          ...contextDataGlobal,
          modalActive: '',
          showModal: false,
        })
      }
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data) => {
    postRegister(data)

    reset()

  }
  return (
    <Container>
      <h2>Registro</h2>
      <p>
        Completa los siguientes <br /> campos para registrarte
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register('email')}
          registerInput="email"
          placeholder="Ingresar correo"
          label="Ingresar correo"
          errors={errors?.email?.message}
          margin="24px 0 21px"
        />
        <Input
          register={register('password')}
          registerInput="password"
          placeholder="Ingresar clave"
          label="Ingresar clave"
          errors={errors?.password?.message}
          margin="0px 0 21px"
          type="password"
        />
        <Input
          register={register('confirmPassword')}
          registerInput="confirmPassword"
          placeholder="Confirmar tu contraseña"
          label="Confirmar tu contraseña"
          errors={errors?.confirmPassword?.message}
          margin="0px 0 21px"
          type="password"
        />
        <Input
          register={register('lastName')}
          registerInput="lastName"
          placeholder="Ingresar apellido"
          label="Apellido"
          errors={errors?.lastName?.message}
          margin="0px 0 21px"
        />

        <Input
          register={register('name')}
          registerInput="name"
          placeholder="Ingresar nombre"
          label="Nombre"
          errors={errors?.name?.message}
          margin="0px 0 21px"
        />
        <Button
          type="submit"
          text="REGISTRARSE"
          width="200px"
          colorFocus="#25da2d"
          margin="7px 0 0"
        />
      </form>
    </Container>
  )
}

const Container = styled.div``
