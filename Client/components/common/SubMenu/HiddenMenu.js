import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const links = [
  { name: 'Inicio', to: '/', id: 1 },
  { name: 'Explorar', to: '#', id: 2 },
]
const categories = [
  { name: 'Publicar', to: '/publicar', id: 3 },
  { name: 'Perfil', to: '/perfil', id: 4 },
  { name: 'Ayuda', to: '/ayuda', id: 5 },
  { name: 'Cerrar sesión', to: '/peripherals', id: 6 },
]

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
}

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
}

export const HiddenMenu = ({ open, action }) => {
  const router = useRouter()

  return (
    <AnimatePresence>
      {open && (
        <Menu
          initial={{ width: 0 }}
          animate={{
            width: 200,
            borderRadius: '0 0 50px 0',
            transition: { duration: 0.2 },
          }}
          exit={{
            width: 0,
            transition: { delay: 0.7, duration: 0.2 },
          }}
        >
          <ContainerItems
            className="container"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
          >
            {links.map(({ name, to, id }) => (
              <Link key={id} href={to} style={null}>
                <Text
                  selected={router.pathname === to}
                  whileHover={{ color: '#fff' }}
                  variants={itemVariants}
                  onClick={action}
                >
                  {name}
                </Text>
              </Link>
            ))}
            <motion.span variants={itemVariants} />
            {categories.map(({ name, to, id }) => (
              <Link passHref key={id} href={to} style={null}>
                <Text
                  selected={router.pathname === to}
                  whileHover={{ color: '#fff' }}
                  variants={itemVariants}
                  onClick={action}
                >
                  {name}
                  <div className="bar" />
                </Text>
              </Link>
            ))}
          </ContainerItems>
        </Menu>
      )}
    </AnimatePresence>
  )
}

const Menu = styled(motion.aside)`
  @media (max-width: 600px){
  position: fixed;
  backdrop-filter: blur(2px);
  height: 400px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
  background-color: var(--backgroundNav);
  color: FFFFFF;
  top: 5rem;
  left: 0;
  z-index: 10;
  span {
    width: 100%;
    height: 1px;
    background-color: var(--mainBg);
  }
  }
`
const ContainerItems = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 3rem 3rem;
  gap: 2.5rem;
`

const Text = styled(motion.p)`
  display: flex;
  align-items: center;
  color: ${(props) => (props?.selected ? '#fff' : '')};
  font-size: 16px;
  .bar {
    display: ${(props) => (props?.selected ? 'inherit' : 'none')};
    width: 2px;
    background-color: #fff;
    height: 20px;
    position: absolute;
    left: 25px;
  }
`
