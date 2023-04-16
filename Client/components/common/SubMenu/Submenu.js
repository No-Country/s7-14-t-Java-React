import styled from 'styled-components'
import { useCycle } from 'framer-motion'
import { MenuButton } from './MenuButton'
import { HiddenMenu } from './HiddenMenu'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Logo from '@/public/images/Logo-2.png'

export const Submenu = () => {
  const [open, cycleOpen] = useCycle(false, true)
  return (
    <Container
      initial={{ opacity: 1, height: '0' }}
      animate={{ opacity: 1, height: '5rem' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, delay: 1 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="categories"
        onClick={cycleOpen}
      >
        <Image src={Logo} alt="logo" className='img'/>
        <MenuButton  isOpen={open} className="but" />
        <p>PubliShare</p>
      </motion.div>

      <HiddenMenu open={open} action={cycleOpen} />
    </Container>
  )
}

const Container = styled(motion.div)`
  width: 100%;
  height: 5rem;
  background-color: var(--backgroundNav);
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content: space-between;
  .categories {
    padding: 0rem 1rem;
    user-select: none;
    display: flex;
    gap: 1rem;
    cursor: pointer;
    align-items: center;
    height: 100%;

    p {
      font-weight: 600;
      font-size: 20px;
      color: #FFFFFF;
    }
  }
  
  @media (max-width: 600px){
    .img{
      display: none;
    }
  }

  @media (min-width: 600px) {
  .but{
    display: none;
    position: relative;
    left: 30px;
  }
  
}
`

