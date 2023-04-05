import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Comment from './Comment'
import AddComment from './AddComment'


const Card = styled.article`
    margin: 16px 0;
    width: 90%;
    height: auto;
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    padding: 16px;
`

const LikeCommentContainer = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;

`
const LikeCommentCount = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    color: #5673BF;
`
const Separator = styled.div`
    width: 100%;
    border: 1px solid #5673BF;
    margin: 16px 0;
`


const PostComments = () => {
  return (
    <Card>
        <LikeCommentContainer>
            <Image src="/../public/icons/comment-icon.png" width={18} height={18} alt='comment-icon'/>
            <LikeCommentCount>
                27
            </LikeCommentCount>
        </LikeCommentContainer>
        <Separator />
        <AddComment />
        <Comment />
    </Card>
  )
}

export default PostComments