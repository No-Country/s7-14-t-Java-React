import styled from 'styled-components'
import { motion } from 'framer-motion'
import SearchIcon from '@/public/icons/Search'

export const SearchNav = () => {
  return (
    <ContainerInput>
      <Input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        placeholder="     Buscar en PubliShare"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="icon-container"
      >
        <SearchIcon />
      </motion.div>
    </ContainerInput>
  )
}

const ContainerInput = styled.div`
  width: 40rem;
  display: flex;
  align-items: center;
  position: relative;
  .icon-container {
    cursor: pointer;
    position: absolute;
    left: -0.5rem;
    border-radius: 6px;
    height: 2rem;
    width: 50px;
    display: flex;
    align-items: left;
    justify-content: center;
  }
`
const Input = styled(motion.input)`
  height: 1rem;
  width: 100%;
  background-color: #fff;
  box-shadow: none;
  border: none;
  color: var(--secondaryViolet1);
  padding: 1rem 1rem;
  border-radius: 10px;
  font-family: Raleway;
  font-size: 16px;
  transition: all ease-in-out 0.3s;
  &:focus {
    outline: none;
    box-shadow: 0 0 6px 1px #01f603;
  }
`
