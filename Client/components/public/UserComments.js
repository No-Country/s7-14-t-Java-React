import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import dateToNow from '@/utils/dateToNow'
import { GlobalContext } from '@/context/GlobalContext'
import capitalizarPrimeraLetra from '@/utils/capitalizarPrimeraLeta'

const Container = styled.section`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 100vh;
`

const CommentContainer = styled.article`
    width: 90%;
    min-height: 152px;
    padding: 16px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    
    @media (min-width: 768px) {
        width: 70%;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }
`

const ProfileCommentContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`
const ProfileTitleCommentContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;

`
const ProfileName = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px; 
`

const CommentDate = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
`
const CommentParagraph = styled.p`
    margin-top: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

`
const StyledTrashIcon = styled(Image)`
    align-self: flex-start;
    cursor: pointer;

`




const UserComments = ({comments, getUserComments}) => {

    const { token, user } = useContext(GlobalContext)

    const deleteComment = async (commentId) => {
    
        const url = `https://sleek-pen-production-f98d.up.railway.app/comments/${commentId}`
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
          getUserComments(user.id)
          return result
        } catch (error) {
          console.log(error)
        }
    }

    
  return (
    <Container>
        {comments && comments.map((e) => {
                return (<CommentContainer key={e.id}>
                    <ProfileCommentContainer>
                        <Image src={e.user.avatar} width={40} height={40} alt="profile-pic"/>
                        <ProfileTitleCommentContainer>                    
                            <ProfileName>
                                {capitalizarPrimeraLetra(e.user.name)} {capitalizarPrimeraLetra(e.user.lastName)}
                            </ProfileName>
                            <CommentDate>
                                {dateToNow(e.date)}
                            </CommentDate>
                        </ProfileTitleCommentContainer>
                        <StyledTrashIcon src='https://i.ibb.co/j6bhK1k/alt.png' width={24} height={24} alt='trash-icon' onClick={() => deleteComment(e.id)}/>
                    </ProfileCommentContainer>
                    <CommentParagraph>
                        {e.content}
                    </CommentParagraph>
                </CommentContainer>)
        })}

    </Container>
  )
}

export default UserComments