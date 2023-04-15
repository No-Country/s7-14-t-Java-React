import React from 'react'
import ProfileCard from '@/components/public/ProfileCard'
import PostDetail from '@/components/public/PostDetail'
import PostHashtags from '@/components/public/PostHashtags'
import PostComments from '@/components/public/PostComments'
import styled from 'styled-components'

const postHashtagsInfo = [
  '#RecetasSaladas',
  '#Guiso',
  '#Lentejas',
  '#Comida',
  '#Asado'
]

const Container = styled.main`
  width: 90%;
`


const PostDetailContainer = () => {
  return (
    <Container>
        <ProfileCard />
        <PostDetail />
        <PostHashtags postHashtagsInfo={postHashtagsInfo}/>
        <PostComments />
    </Container>
  )
}

export default PostDetailContainer