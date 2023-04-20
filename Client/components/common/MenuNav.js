import AccountIcon from '@/public/icons/Account'
import CartIcon from '@/public/icons/Cart'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { GlobalContext } from '@/context/GlobalContext'
import { useContext } from 'react'

export const MenuNav = () => {
  const { contextDataGlobal, setContextDataGlobal, user, setUser, setToken } = useContext(GlobalContext)

  const handleClick = () => {
    setUser('')
    setToken('')
  }
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {user.id ? (<Item onClick={handleClick}>
        <span className="bar" />
        <AccountIcon />
        <p>Cerrar sesión</p>
        </Item>) : (
              <Item
              onClick={() =>
                setContextDataGlobal({
                  ...contextDataGlobal,
                  showModal: true,
                  modalActive: 'login',
                })
              }
            >
              <span className="bar" />
              <AccountIcon width={25} heigth={25}/>
              <p>Ingresar</p>
            </Item>
      )}

      </Container>
  )
}

const Container = styled(motion.div)`
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.9rem;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  margin-right: 8px;

  path {
    transition: all 0.3s ease-in-out;
  }
  .bar {
    width: 1px;
    height: 5rem;
    background-color: #989898;
    margin-right: 8px;
  }
  &:hover {
    color: #FF969A;
    .bar {
      background-color: #FF969A;
    }
    path {
      fill: #FF969A;
    }
  }
`
