import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import capitalizarPrimeraLetra from '@/utils/capitalizarPrimeraLeta'
import dateToNow from '@/utils/dateToNow'

const Card = styled.section`
    display: flex;
    width: 100%;
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    margin-top: 20px;
    padding: 8px;
`
const ProfileImage = styled(Image)`
    margin-left: 8px;
`

const ProfileTitleContainer = styled.div`
    width: 100%;
    padding-left: 8px;
`
const ProfileTitle = styled.h3`
    font-size: 16px;
    font-weight: 800;
`
const PostDate = styled.span`
    font-size: 12px;
    font-weight: 400;
`
const FollowButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: end;
    width: 62px;
    height: 24px;
    border: 0.5px solid #5673BF;
    border-radius: 5px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    color: #5673BF;
    background-color: #FFFFFF;
    align-self: center;
    cursor: pointer;
`
const FollowedButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: end;
    width: 62px;
    height: 24px;
    border: 0.5px solid #5673BF;
    border-radius: 5px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    color: #FFFFFF;
    align-self: center;
    cursor: pointer;
    background-color: #5673BF;
`

const ProfileCard = ({profileImg, name, lastName, date, token, postUserId, followers, activeUserId, getPosts, postId}) => {

    const followUser = async (id) => {
    
        const url = `https://sleek-pen-production-f98d.up.railway.app/followers/${id}`
        const postToken = `Bearer ${token}`
      
        try {
          const res = await fetch(url, {
            method:'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': postToken,
            },
          })
          const result = await res.json()
          getPosts(postId)
          return result
        } catch (error) {
          console.log(error)
        }
    }

    const unfollowUser = async (id) => {
    
        const url = `https://sleek-pen-production-f98d.up.railway.app/followers/${id}`
        const postToken = `Bearer ${token}`
      
        try {
          const res = await fetch(url, {
            method:'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': postToken,
            },
          })
          const result = await res.json()
          getPosts(postId)
          return result
        } catch (error) {
          console.log(error)
        }
    }

    
  return (
    <Card>
        <ProfileImage src={profileImg} width={40} height={40} alt='profile-pic'/>
        <ProfileTitleContainer>
            <ProfileTitle>
                {capitalizarPrimeraLetra(name)} {capitalizarPrimeraLetra(lastName)}
            </ProfileTitle>
            <PostDate>
                {dateToNow(date)}
            </PostDate>
        </ProfileTitleContainer>
        {postUserId !== activeUserId && ( followers.some((e) => e.followedUser.id === postUserId) ? <FollowedButton onClick={() => unfollowUser(postUserId)}>Seguido </FollowedButton> : <FollowButton onClick={() => followUser(postUserId)}>
            +Seguir
        </FollowButton>)
        }
        
    </Card>
  )
}

export default ProfileCard