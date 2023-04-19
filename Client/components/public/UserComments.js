import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import dateToNow from '@/utils/dateToNow'
import TrashIcon from '@/public/icons/TrashIcon'

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
const StyledTrashIcon = styled(TrashIcon)`
    align-self: flex-start;
    cursor: pointer;

`

const UserComments = ({comments}) => {
  return (
    <Container>
        {comments && comments.map((e) => {
                <CommentContainer key={e.id}>
                    <ProfileCommentContainer>
                        <Image src={e.user.avatar} width={40} height={40} alt="profile-pic"/>
                        <ProfileTitleCommentContainer>                    
                            <ProfileName>
                                {e.user.name} {e.user.lastName}
                            </ProfileName>
                            <CommentDate>
                                {dateToNow(e.date)}
                            </CommentDate>
                        </ProfileTitleCommentContainer>
                        <StyledTrashIcon />
                    </ProfileCommentContainer>
                    <CommentParagraph>
                        {e.content}
                    </CommentParagraph>
                </CommentContainer>
        })}

    </Container>
  )
}

export default UserComments