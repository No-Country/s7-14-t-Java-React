import React, { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import SendIcon from '@/public/icons/SendIcon'

const AddCommentContainer = styled.div`
    display: flex;
    position: relative;
`
const AddCommentInput = styled.input`
    height: 40px;
    width: 100%;
    border: 1px solid #000000;
    border-radius: 15px;
    padding: 8px 14px; 
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    margin-left: 10px;
    opacity: 0.5;

    &::placeholder {
        color: #000000;
    }
`
const PostSendIcon = styled(SendIcon)`
    position: absolute;
    right: 10px;
    bottom: 11px;
    cursor: pointer;
    opacity: 0.5;
`

const AddComment = () => {

    const [commentText, setCommentText] = useState("")
    
    const handleComment = (event) => {
        setCommentText(event.target.value)
    }

    const handleSubmit = () => {
        console.log(commentText)
    }

    return (
    <AddCommentContainer>
        <Image src="/../public/images/profile-image.png" width={40} height={40} alt='profile-pic'/>
        <AddCommentInput placeholder='Anadir un comentario...' onChange={handleComment}/>
        <PostSendIcon onClick={handleSubmit}/>
    </AddCommentContainer> 
  )
}

export default AddComment;