import styled from 'styled-components'
import { useCycle } from 'framer-motion'
import { MenuButton } from './MenuButton'
import { HiddenMenu } from './HiddenMenu'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { MenuNav } from '../MenuNav'
import { SearchNav } from '../SearchNav'
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
      <Link href="/">
	<Image src={Logo} alt="logo" height="50" width="50" className='img'/>
      </Link>
        <MenuButton  isOpen={open} className="but" />
        <p>PubliShare</p>
    </motion.div>
         
    <SearchNav />
    <div className='linkes'>
      <Link href="/">
	Home
      </Link>
      <Link href="/explorar">
	Explorar
      </Link>
      <Link href="/publicar">
	Publicar
      </Link>
      <Link href="/perfil">
	Perfil
      </Link>
      <Link href="/ingresar">
      </Link>

    </div>
    <MenuNav />
      <HiddenMenu open={open} action={cycleOpen} />
    </Container>
  )
}

const Container = styled(motion.div)`
  width: 100%;
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
    left: 40px;
    }
  }
    .linkes{
      display: flex;
      gap: 20px;
      padding: 20px;
      color: #FFFFFF;
      margin: 5px;
    }
  @media (max-width: 600px){ 
    .linkes a{
      display: none;
      padding: 5px;
    }
  }
` 
 
