import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import PostCard from './PostCard'

const Container = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 100vh;
`

const posts = {
  name: "Agus Martínez",
  profilePic: "/../public/images/profile-image.png",
  date: "Hace 2 días",
  title: "Mi guiso de lentejas",
  tag: "Cocina",
  description: "El guiso de lentejas es para mí el guiso por excelencia, el que mejor me sale, el que hago casi a ciegas. Una comida ideal para comer en los días fríos, porque enseguida sube la temperatura corporal, además como es bien rendidor y bastante económico es muy práctico para cocinar cuando tenemos muchos invitados. Les recomiendo hacer mucho y frisarlo en porciones...",
  likes: "1.2 mil",
  comments: "534"
}

const PostsContainer = ({posts}) => { 
  const arr = posts && [...posts]
  return (
    <Container>
      {posts && arr.reverse().map((e) => {
          return <PostCard posts={e} key={e.id}/>
        })}
    </Container>
  )
}

export default PostsContainer