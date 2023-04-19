import React, {useContext} from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Comment from './Comment'
import AddComment from './AddComment'
import { useComments } from '@/hooks/useComments'
import { postsFetch } from '@/services/postsFetch'
import { GlobalContext } from '@/context/GlobalContext'


const Card = styled.article`
    margin: 16px 0;
    width: 100%;
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


const PostComments = ({postId}) => {

    const { comment, isLoading, isError } = useComments(postId, postsFetch)

    const {user} = useContext(GlobalContext)

  return (
    <Card>
        <LikeCommentContainer>
            <Image src="https://i.ibb.co/Gtm8ZDf/comment-icon.webp" width={18} height={18} alt='comment-icon'/>
            <LikeCommentCount>
                {comment ? comment.length : 0}
            </LikeCommentCount>
        </LikeCommentContainer>
        {user.avatar && (
            <>
                <Separator />
                <AddComment postId={postId} userAvatar={user.avatar}/>
            </>
        )}

        
        {comment && comment.map((e) => {
            return <Comment commentData={e} key={e.id}/>
        })}        
    </Card>
  )
}

export default PostComments