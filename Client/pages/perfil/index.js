import React, {useState} from 'react'
import styled from 'styled-components'
import ProfileImage from '../../public/images/profile-image.png'
import Image from 'next/image'
import PostsContainer from '@/components/public/PostsContainer'
import UserComments from '@/components/public/UserComments'

const Container = styled.section`
    width: 100%;
    margin-top: 200px;
`
const PerfilContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 128px;
    background: #FFFFFF;

`
const PerfilHeader = styled.header`
    display: flex;
    width: 100%;
    height: 88px;
    font-family: 'Roboto';
    font-style: normal;
    letter-spacing: 0.15px;
    padding: 24px;
`
const ProfileNameFollowers = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 8px;
`
const ProfileName = styled.h3`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
`
const ProfileFollowers = styled.span`
    font-weight: 400;
    font-size: 12px;
`
const Separator = styled.div`
    border: 1px solid #5673BF;
    width: 90%;
    opacity: 0.5;
`
const ProfileFooter = styled.footer`
    width: 90%;
    height: 40px;
    display: flex;
    justify-content: center;
`
const PerfilButton = styled.div`
    position: relative;
    width: 164px;
    height: 40px;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;    
    display: flex;
    justify-content: center;
    align-items: center;
`
const PublicacionesButton = styled(PerfilButton)`
    color: ${props => !props.isActive ? "#000000" : "#5673BF" };
    opacity: ${props => !props.isActive ? "0.5" : "1"};
`
const ComentariosButton = styled(PerfilButton)`
    color: ${props => !props.isActive ? "#000000" :  "#5673BF"};
    opacity: ${props => !props.isActive ? "0.5" :  "1"};
`
const ActiveButton = styled.div`
    width: 100%;
    height: 4px;
    border-radius: 5px 5px 0px 0px;
    background: #5673BF;
    position: absolute;
    bottom: 0;
    display: ${props => props.isActive ? 'block' : 'none'};
`
const index = () => {
    const [activePubs, setActivePubs] = useState(true)
    const [activeComments, setActiveComments] = useState(false)

    const handleClickPublicaciones = () => {
        if(activeComments) {
            setActiveComments(false)
            setActivePubs(true)
        }
    }

    const handleClickComentarios = () => {
        if (activePubs) {
            setActiveComments(true)
            setActivePubs(false)
        }
    }    

  return (
    <Container>
        <PerfilContainer>
            <PerfilHeader>
                <Image src={ProfileImage} alt='profilepic'/>
                <ProfileNameFollowers>
                    <ProfileName>
                        Claudy Pérez
                    </ProfileName>
                    <ProfileFollowers>
                        823 seguidores
                    </ProfileFollowers>
                </ProfileNameFollowers>
            </PerfilHeader>
            <Separator />
            <ProfileFooter>
                <PublicacionesButton isActive={activePubs} onClick={()=>handleClickPublicaciones()}>
                    Publicaciones
                    <ActiveButton isActive={activePubs}/>
                </PublicacionesButton>
                <ComentariosButton isActive={activeComments} onClick={()=>handleClickComentarios()}>
                    Comentarios
                    <ActiveButton isActive={activeComments}/>
                </ComentariosButton>
            </ProfileFooter>
        </PerfilContainer>
        {activePubs ? <PostsContainer posts={'algo'}/> :  <UserComments />}
        
    </Container>
  )
}

export default index