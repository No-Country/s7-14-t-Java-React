import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Tags, TagsContainer } from '../common/Tags'
import { useRouter } from 'next/router'
import { postsFetch, postsUrl } from '@/services/postsFetch'
import { usePosts } from '@/hooks/usePosts'

const Card = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    margin-top: 16px;
    padding: 16px;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const Title = styled.h3`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
`
const LikeIcon = styled(Image)`
    justify-self: end;
`

const PostText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.15px;
    
    & ul {
        list-style-type: disc;
        list-style-position: inside;
        padding-left: 1.5em;

    }
    & ol {
        list-style-type: decimal;
        list-style-position: inside;
        padding-left: 1.5em;
    }
`

const LikeCommentContainer = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
    margin-top: 6px;

`
const LikeCommentCount = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    color: #5673BF;
`

const PostDetail = ({title, category, text, likes}) => {
  return (
    <Card>
        <TitleContainer>
            <Title>
                {title}
            </Title>
            <LikeIcon src={"/../public/icons/favorite-icon.png"} width={18} height={16} alt='like-icon'/>
        </TitleContainer>
        <TagsContainer>
            <Tags>
                {category}
            </Tags>
        </TagsContainer>
        {/* dangerouslySetInnerHTML={{__html: text}} */}
        <PostText dangerouslySetInnerHTML={{__html: text}}>        
        </PostText>

        <LikeCommentContainer>
            <Image src="/../public/icons/like-icon.png" width={16.76} height={15.57} alt='like-icon'/>
            <LikeCommentCount>
                {likes ? likes : 0}
            </LikeCommentCount>
        </LikeCommentContainer>
        
    </Card>
  )
}

export default PostDetail