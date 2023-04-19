import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import dateToNow from '@/utils/dateToNow'
import capitalizarPrimeraLetra from '@/utils/capitalizarPrimeraLeta'


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

const Comment = ({commentData}) => {

    console.log(commentData)
  return (
    <>
    <Separator />
    <CommentContainer>
        <ProfileCommentContainer>
            <Image src={commentData.user.avatar} width={40} height={40} alt="profile-pic"/>
            <ProfileTitleCommentContainer>                    
                <ProfileName>
                    {capitalizarPrimeraLetra(commentData.user.name)} {capitalizarPrimeraLetra(commentData.user.lastName)}
                </ProfileName>
                <CommentDate>
                    {dateToNow(commentData.date)}
                </CommentDate>
            </ProfileTitleCommentContainer>
        </ProfileCommentContainer>
        <CommentParagraph>
           {commentData.content}
        </CommentParagraph>
    </CommentContainer>
    </>
  )
}

export default Comment