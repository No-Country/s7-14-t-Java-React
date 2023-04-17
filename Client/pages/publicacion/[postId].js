import React from 'react'
import ProfileCard from '@/components/public/ProfileCard'
import PostDetail from '@/components/public/PostDetail'
import PostHashtags from '@/components/public/PostHashtags'
import PostComments from '@/components/public/PostComments'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { usePosts } from '@/hooks/usePosts'
import { postsFetch } from '@/services/postsFetch'
import { useComments } from '@/hooks/useComments'

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
  const router = useRouter()
  const {postId} = router.query
  
  const { post, isLoading, isError } = usePosts(postId, postsFetch)

  return (
    <Container>
        {post && (
          <>
            <ProfileCard profileImg={post.user.avatar} name={post.user.name} lastName={post.user.lastName} date={post.date}/>
            <PostDetail title={post.title} category={post.category?.name} text={post.text}/>
            <PostHashtags postHashtagsInfo={post.hashtag}/>
            <PostComments postId={postId}/>
          </>
        )}

    </Container>
  )
}

export default PostDetailContainer