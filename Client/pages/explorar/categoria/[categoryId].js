import React, { useState, useEffect } from 'react'
import PostsContainer from '@/components/public/PostsContainer'
import { useRouter } from 'next/router'
import { postsUrl } from '@/services/postsFetch'

const CategoryContainer = () => {

    const router = useRouter()
    const {categoryId} = router.query

    const [postsCategory, setPostsCategory] = useState (null)

    const getPosts = async () => {
      const res= await fetch(`${postsUrl}category/${categoryId}`).then(res=>res.json()).catch(err => console.error(err))
      setPostsCategory(res)
    }
  
    useEffect(()=>{
      getPosts()
    }, [])

  return (
    <>
      {postsCategory && <PostsContainer posts={postsCategory}/>}
    </>
  )
}

export default CategoryContainer