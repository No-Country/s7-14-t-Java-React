import React from 'react'
import styled from 'styled-components'
import PostCard from './PostCard'

const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
`

const PostsContainer = () => {
  return (
    <Container>
      <PostCard />
    </Container>
  )
}

export default PostsContainer