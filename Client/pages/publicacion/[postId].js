import React, { useEffect, useState, useContext } from 'react'
import ProfileCard from '@/components/public/ProfileCard'
import PostDetail from '@/components/public/PostDetail'
import PostHashtags from '@/components/public/PostHashtags'
import PostComments from '@/components/public/PostComments'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { usePosts } from '@/hooks/usePosts'
import { postsFetch } from '@/services/postsFetch'
import { useComments } from '@/hooks/useComments'
import { set } from 'date-fns'
import { GlobalContext } from '@/context/GlobalContext'

const postHashtagsInfo = [
  '#RecetasSaladas',
  '#Guiso',
  '#Lentejas',
  '#Comida',
  '#Asado'
]

const Container = styled.main`
  width: 90%;
  @media (min-width: 768px) {
        width: 70%;
  }
`


const PostDetailContainer = () => {
  const router = useRouter()
  const {postId} = router.query
  const { token, user } = useContext(GlobalContext)

  const [post, setPost] = useState(null)
  const [likes, setLikes] = useState(null)
  const [followers, setFollowers] = useState([])
  
  // const { post, isLoading, isError } = usePosts(postId, postsFetch)

  const getPosts = async (id) => {
    try {
      const res = await fetch(`https://sleek-pen-production-f98d.up.railway.app/posts/${id}`)
      const result = await res.json()
      getFollowers(user.id)
      setPost(result)
      setLikes(result.likes)      
      return result
    } catch (error) {
      console.log(error)
    }
  }
  const getFollowers = async (id) => {
    try {
      const res = await fetch(`https://sleek-pen-production-f98d.up.railway.app/followers/${id}`, {
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
      const result = await res.json()
      setFollowers(result)
      return result
    } catch (error) {
      console.log(error)
    }
  }

  const likePost = async (id) => {
    
    const url = `https://sleek-pen-production-f98d.up.railway.app/posts/like/${id}`
    const postToken = `Bearer ${token}`
  
    try {
      const res = await fetch(url, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': postToken,
        },
      })
      const result = await res.json()
      getPosts(postId)
      return result
    } catch (error) {
      console.log(error)
    }
}

  useEffect(() => {
    getPosts(postId)
    
    
  }, [])
  
  return (
    <Container>
        {post && (
          <>
            <ProfileCard profileImg={post.user.avatar} name={post.user.name} lastName={post.user.lastName} date={post.date} token={token} postUserId={post.user.id} followers={followers} activeUserId={user.id} getPosts={getPosts} postId={postId}/>
            <PostDetail title={post.title} category={post.category?.name} text={post.text} likes={likes} id={postId} likePost={likePost} activeUser={user}/>
            <PostHashtags hashtagData={post.hashtag}/>
            <PostComments postId={postId}/>
          </>
        )}

    </Container>
  )
}

export default PostDetailContainer