import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { Tags, TagsContainer } from '../common/Tags'
import capitalizarPrimeraLetra from '@/utils/capitalizarPrimeraLeta'
import dateToNow from '@/utils/dateToNow'
import { useComments } from '@/hooks/useComments'
import { postsFetch } from '@/services/postsFetch'

const Card = styled(Link)`
    margin-top: 20px;
    width: 90%;
    max-height: 400px;
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    padding: 16px;

    @media (min-width: 768px) {
        width: 70%;
    }
`
const Header = styled.header`
    display: flex;
    width: 100%;
    border-radius: 8px;
    background: #FFFFFF;
`
const ProfileImage = styled(Image)`
    border-radius: 50%;   
`
const ProfileTitleContainer = styled.div`
    width: 100%;
    padding-left: 8px;
`
const ProfileTitle = styled.h3`
    font-size: 16px;
    font-weight: 800;
    
    @media (min-width: 768px) {
        font-size: 20px;
    }
`
const PostDate = styled.span`
    font-size: 12px;
    font-weight: 400;

    @media (min-width: 768px) {
        font-size: 14px;
    }
`
const LikeIcon = styled(Image)`
    justify-self: end;
`
const Content = styled.div`
    margin-top: 24px;
    height: 100%;
`
const Title = styled.h3`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;

    @media (min-width: 768px) {
        font-size: 24px;
    }
`
const Paragraph = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.15px;
    min-height: 50px;
    margin-bottom: 4px;
    @media (min-width: 768px) {
        font-size: 16px;
    }
`
const Footer = styled.footer`
    display: flex;
    width: 100%;
    border-radius: 8px;
    background: #FFFFFF;
    gap: 19px;
    align-self: end;
    justify-self: end;

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
    @media (min-width: 768px) {
        font-size: 14px;
    }
`

const PostCard = ({posts}) => {

    const countString = (str) => {
        if (str.length > 366)  {
            const extract = str.substring(0, 377)
            return `${extract}...`
        } else {
            return str
        }
    }

    const { comment, isLoading, isError } = useComments(posts.id, postsFetch)

  return (
    
    <Card href={`/publicacion/${posts.id}`}>
        <Header>
            <ProfileImage src={posts.user.avatar} width={40} height={40} alt='profile-pic'/>
            <ProfileTitleContainer>
                <ProfileTitle>
                    {capitalizarPrimeraLetra(posts.user.name)} {capitalizarPrimeraLetra(posts.user.lastName)}
                </ProfileTitle>
                <PostDate> 
                   {dateToNow(posts.date)}
                </PostDate>
            </ProfileTitleContainer>
            <LikeIcon src="https://i.ibb.co/YTZf7Bb/favorite-icon.webp" width={18} height={16} alt='favorite-icon'/>
        </Header>
        <Content>
            <Title>
                {posts.title}
            </Title>
            <TagsContainer>
                <Tags>
                    {posts.category?.name}
                </Tags>
            </TagsContainer>
            {/* dangerouslySetInnerHTML={{__html: posts.text}} */}
            <Paragraph dangerouslySetInnerHTML={{__html: countString(posts.text)}}>
            </Paragraph>
        </Content>        
        <Footer>
            <LikeCommentContainer>
                <Image src="https://i.ibb.co/c8PC3s7/like-icon.webp" width={16.76} height={15.57} alt='like-icon'/>
                <LikeCommentCount>
                    {posts.countLikes ? posts.countLikes : 0}
                    {/* {posts.likes} */}
                </LikeCommentCount>
            </LikeCommentContainer>
            <LikeCommentContainer>
                <Image src="https://i.ibb.co/Gtm8ZDf/comment-icon.webp" width={18} height={18} alt='comment-icon'/>
                <LikeCommentCount>
                    {comment ? comment.length : 0}
                    {/* {posts.comments} */}
                </LikeCommentCount>
            </LikeCommentContainer>
        </Footer>

    </Card>
  )
}

export default PostCard