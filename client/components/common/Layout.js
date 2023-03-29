import { AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { GlobalContext } from '@/context/GlobalContext'
import { useContext } from 'react'
import Modal from './Modal'
const Layout = ({ children }) => {
  const { contextDataGlobal, setContextDataGlobal } = useContext(GlobalContext)

  const setShowModal = (showModal) => {
    setContextDataGlobal({ ...contextDataGlobal, showModal })
  }
  return (
    <PageContainer>
      <Modal
        setShowModal={setShowModal}
        showModal={contextDataGlobal.showModal}
        padding="0"
      >
      </Modal>
  
      <AnimatePresence mode="wait">{children}</AnimatePresence>

    </PageContainer>
  )
}

export default Layout

const PageContainer = styled.div`
  background-color: var(--mainBg);
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`
