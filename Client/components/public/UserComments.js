import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import dateToNow from '@/utils/dateToNow'
import TrashIcon from '@/public/icons/TrashIcon'
import SendIcon from '@/public/icons/SendIcon'

const Container = styled.section`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

const CommentContainer = styled.article`

`

const ProfileCommentContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`
const ProfileTitleCommentContainer = styled.div`
    display: flex;
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

`
const StyledSendIcon = styled(SendIcon)`

`

const UserComments = () => {
  return (
    <Container>
        <CommentContainer>
            <ProfileCommentContainer>
                <Image src="/../public/images/profile-image.png" width={40} height={40} alt="profile-pic"/>
                <ProfileTitleCommentContainer>                    
                    <ProfileName>
                        Mate Amargo
                    </ProfileName>
                    <CommentDate>
                        {/* {dateToNow(commentData.date)} */}
                        123981293889123
                    </CommentDate>
                </ProfileTitleCommentContainer>
            </ProfileCommentContainer>
            <CommentParagraph>
                comentario
            </CommentParagraph>
        </CommentContainer>
    </Container>
  )
}

export default UserComments