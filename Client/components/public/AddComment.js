import React, { useState, useContext } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import SendIcon from '@/public/icons/SendIcon'
import { ContextType } from 'react'
import { GlobalContext } from '@/context/GlobalContext'

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

const AddComment = ({postId, userAvatar, getComments}) => {

    const {token} = useContext(GlobalContext)

    const [commentText, setCommentText] = useState("")

    const postComment = async () => {
        const commentToken = `Bearer ${token}`
        const url = `https://sleek-pen-production-f98d.up.railway.app/comments/new/${postId}`
        try {
            const res = await fetch(url, {
                method:'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': commentToken,
                },
                body: JSON.stringify({
                  "content": commentText,
                })
              })

            const result = await res.json()
            getComments()
            return result
        } catch (error) {
            console.error(error)
        }
    }
    
    const handleComment = (event) => {
        setCommentText(event.target.value)
    }

    const handleSubmit = () => {
        postComment()
        setCommentText('')
    }
    


    return (
    <AddCommentContainer>
        <Image src={userAvatar} width={40} height={40} alt='profile-pic'/>
        <AddCommentInput placeholder='Anadir un comentario...' value={commentText} onChange={handleComment}/>
        <PostSendIcon onClick={handleSubmit}/>
    </AddCommentContainer> 
  )
}

export default AddComment