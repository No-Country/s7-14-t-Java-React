import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components'
import ProfileImage from '../../public/images/profile-image.png'
import Image from 'next/image'
import PostsContainer from '@/components/public/PostsContainer'
import { GlobalContext } from '@/context/GlobalContext'
import { postsUrl } from '@/services/postsFetch'
import UserComments from '@/components/public/UserComments'
import capitalizarPrimeraLetra from '@/utils/capitalizarPrimeraLeta'

const Container = styled.section`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const PerfilContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 128px;
    background: #FFFFFF;
    @media (min-width: 768px) {
        width: 70%;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }

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
    width: 50%;
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
    cursor: pointer;
`
const ComentariosButton = styled(PerfilButton)`
    color: ${props => !props.isActive ? "#000000" :  "#5673BF"};
    opacity: ${props => !props.isActive ? "0.5" :  "1"};
    cursor: pointer;
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

const ProfilePic = styled(Image)`
 border-radius: 50%;
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

    const posts = [
        {
          "id": 1,
          "text": "hola",
          "title": null,
          "images": [
            {
              "name": "hola",
              "dataImage": "hola"
            }
          ],
          "date": "2023-04-17T06:09:55.124+00:00",
          "hashtag": [
            {
              "name": "hola"
            }
          ],
          "category": {
            "id": 2,
            "description": "Todas las ñañas que se refieran a los deportes van aca",
            "name": "Videojuegos"
          },
          "user": {
            "id": 21,
            "name": "roberth",
            "lastName": "lopez",
            "email": "roberth@gmail.com",
            "status": null,
            "phone": "12123",
            "avatar": "https://unavatar.io/roberth@gmail.com",
            "token": null
          }
        },
        {
          "id": 2,
          "text": "<p>asdqasdad</p><p>a<strong>sdasdasd</strong></p><ol><li><strong>asdasdasd</strong></li></ol><p><br></p><ul><li><strong>asdasdasd</strong></li></ul>",
          "title": "roberth",
          "images": [
            {
              "name": "foto",
              "dataImage": ""
            }
          ],
          "date": "2023-04-17T08:25:21.735+00:00",
          "hashtag": [
            {
              "name": "hola"
            }
          ],
          "category": {
            "id": 2,
            "description": "Todas las ñañas que se refieran a los deportes van aca",
            "name": "Videojuegos"
          },
          "user": {
            "id": 21,
            "name": "roberth",
            "lastName": "lopez",
            "email": "roberth@gmail.com",
            "status": null,
            "phone": "12123",
            "avatar": "https://unavatar.io/roberth@gmail.com",
            "token": null
          }
        },
        {
          "id": 7,
          "text": "<p>asdqasdad</p><p>a<strong>sdasdasd</strong></p><ol><li><strong>asdasdasd</strong></li></ol><p><br></p><ul><li><strong>asdasdasd</strong></li></ul><p><br></p><p><br></p><p><br></p><p><br></p>",
          "title": "Post de musica",
          "images": [
            {
              "name": "foto",
              "dataImage": ""
            }
          ],
          "date": "2023-04-17T08:31:33.224+00:00",
          "hashtag": [
            {
              "name": "hola"
            }
          ],
          "category": null,
          "user": {
            "id": 21,
            "name": "roberth",
            "lastName": "lopez",
            "email": "roberth@gmail.com",
            "status": null,
            "phone": "12123",
            "avatar": "https://unavatar.io/roberth@gmail.com",
            "token": null
          }
        }
      ]

      const [userPosts, setUserPosts] = useState(null)
      const [userComments, setUserComments] = useState(null)
      const [userFollowers, setUserFollowers] = useState(0)

      const { user, token } = useContext(GlobalContext)

      const getUserPosts = async () => {
        if (user.id) {
            const res= await fetch(`${postsUrl}user/${user.id}`).then(res=>res.json())
            setUserPosts(res)
        }
      }
      const getUserComments = async (id) => {
        if (id) {
            const res= await fetch(`https://sleek-pen-production-f98d.up.railway.app/comments/user/${id}`)
            .then(res=>res.json())
            .catch(err => console.error(err))
            setUserComments(res)
        }
      }

      const getUserFollowers = async () => {
        const postToken = `Bearer ${token}`
        if (user.id) {
            const res= await fetch(`https://sleek-pen-production-f98d.up.railway.app/followers/${user.id}`, {
              method:'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': postToken,
              },
            })
            .then(res=>res.json())
            .catch(err => console.error(err))
            setUserFollowers(res)
        }
      }
      useEffect(()=>{
        getUserPosts()
        getUserFollowers()
        getUserComments(user.id)
      }, [])

  return (
    <Container>
        <PerfilContainer>
            <PerfilHeader>
                <ProfilePic src={user.avatar} width={40} height={40} alt='profilepic'/>
                <ProfileNameFollowers>
                    <ProfileName>
                        {capitalizarPrimeraLetra(user.name)} {capitalizarPrimeraLetra(user.lastName)}
                    </ProfileName>
                    <ProfileFollowers>
                        {userFollowers ? userFollowers.length : 0} seguidores
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
        {activePubs ? <PostsContainer posts={userPosts} /> : <UserComments comments={userComments} getUserComments={getUserComments}/>}
        
    </Container>
  )
}

export default index