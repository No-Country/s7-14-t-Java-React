import React from 'react'
import ProfileCard from '@/components/public/ProfileCard'
import PostDetail from '@/components/public/PostDetail'
import PostHashtags from '@/components/public/PostHashtags'
import PostComments from '@/components/public/PostComments'

const PostDetailContainer = () => {
  return (
    <>
        <ProfileCard />
        <PostDetail />
        <PostHashtags />
        <PostComments />
    </>
  )
}

export default PostDetailContainer