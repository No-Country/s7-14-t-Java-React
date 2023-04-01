import React from 'react'
import { Controller } from 'react-hook-form'
import styled from 'styled-components'
import Image from 'next/image'

const Card = styled.article`
    width: 90%;
    height: 400px;
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    padding: 16px;
`
const Header = styled.header`
    display: flex;
    width: 100%;
    border-radius: 8px;
    background: #FFFFFF;
`
const ProfileImage = styled(Image)`
   
`
const ProfileTitleContainer = styled.div`
    width: 100%;
    padding-left: 8px;
`
const ProfileTitle = styled.h3`
    font-size: 16px;
    font-weight: 800;
`
const PostDate = styled.span`
    font-size: 12px
    font-weight: 400;
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
`
const TagsContainer = styled.div`
    width: 96px;
    height: 24px;
    border: 1px solid #6F6E6E;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px 0;
`
const Tags = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.15px;
`
const Paragraph = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.15px;
    height: 100%;
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
`

const PostCard = () => {
  return (
    <Card>
        <Header>
            <ProfileImage src="/../public/images/profile-image.png" width={40} height={40}/>
            <ProfileTitleContainer>
                <ProfileTitle>
                    Agus Martínez
                </ProfileTitle>
                <PostDate>
                    Hace 2 días
                </PostDate>
            </ProfileTitleContainer>
            <LikeIcon src="/../public/icons/favorite-icon.png" width={18} height={16}/>
        </Header>
        <Content>
            <Title>
                Mi guiso de lentejas
            </Title>
            <TagsContainer>
                <Tags>
                    Cocina
                </Tags>
            </TagsContainer>
            <Paragraph>
                El guiso de lentejas es para mí el guiso por excelencia, el que mejor me sale, el que hago casi a ciegas. Una comida ideal para comer en los días fríos, porque enseguida sube la temperatura corporal, además como es bien rendidor y bastante económico es muy práctico para cocinar cuando tenemos muchos invitados. Les recomiendo hacer mucho y frisarlo en porciones...
            </Paragraph>
        </Content>        
        <Footer>
            <LikeCommentContainer>
                <Image src="/../public/icons/like-icon.png" width={16.76} height={15.57}/>
                <LikeCommentCount>
                    1.2 mil
                </LikeCommentCount>
            </LikeCommentContainer>
            <LikeCommentContainer>
                <Image src="/../public/icons/comment-icon.png" width={18} height={18}/>
                <LikeCommentCount>
                    534
                </LikeCommentCount>
            </LikeCommentContainer>
        </Footer>
    </Card>
  )
}

export default PostCard