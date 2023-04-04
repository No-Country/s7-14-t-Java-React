import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'


const Separator = styled.div`
    width: 100%;
    border: 1px solid #5673BF;
    margin: 16px 0;
`

const CommentContainer = styled.div`

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

const Comment = () => {
  return (
    <>
    <Separator />
    <CommentContainer>
        <ProfileCommentContainer>
            <Image src="/../public/images/profile-image.png" width={40} height={40} alt="profile-pic"/>
            <ProfileTitleCommentContainer>                    
                <ProfileName>
                    Mate Amargo
                </ProfileName>
                <CommentDate>
                    Hace 3 horas
                </CommentDate>
            </ProfileTitleCommentContainer>
        </ProfileCommentContainer>
        <CommentParagraph>
            Me encanta, lo he probado varias veces y siempre tengo ganas de repetir! Gracias por la receta. 😋👌
        </CommentParagraph>
    </CommentContainer>
    </>
  )
}

export default Comment