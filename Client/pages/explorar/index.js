import React from 'react'
import styled from 'styled-components'
import PostHashtags from '@/components/public/PostHashtags'
import ArrowRight from '@/public/icons/ArrowRight'
import KitchenIcon from '@/public/icons/KitchenIcon'
import JoystickIcon from '@/public/icons/JoystickIcon'
import TravelIcon from '@/public/icons/TravelIcon'
import SportsIcon from '@/public/icons/SportsIcon'
import PoliticsIcon from '@/public/icons/PoliticsIcon'
import TvIcon from '@/public/icons/TvIcon'
import MovieIcon from '@/public/icons/MovieIcon'
import FitnessIcon from '@/public/icons/FitnessIcon'
import FashionIcon from '@/public/icons/FashionIcon'
import MusicIcon from '@/public/icons/MusicIcon'
import CelebritiesIcon from '@/public/icons/CelebritiesIcon'
import BusinessIcon from '@/public/icons/BusinessIcon'
import Link from 'next/link'

const postHashtagsInfo = [
    '#RecetasSaladas',
    '#Guiso',
    '#Lentejas',
    '#Comida',
    '#Asado',
    '#Lentejas',
    '#Comida',
    '#Asado'
]

const categoryData = [
    {
        icon: KitchenIcon,
        name: 'Cocina',
        slug: '1'
    },
    {
        icon: JoystickIcon,
        name: 'Videojuegos',
        slug: '2'
    },
    {
        icon: TravelIcon,
        name: 'Viajes',
        slug: '3'
    },
    {
        icon: SportsIcon,
        name: 'Deportes',
        slug: '4'
    },
    {
        icon: BusinessIcon,
        name: 'Negocios',
        slug: '5'
    },
    {
        icon: PoliticsIcon,
        name: 'Política',
        slug: '6'
    },
    {
        icon: TvIcon,
        name: 'Televisión',
        slug: '7'
    },
    {
        icon: MovieIcon,
        name: 'Cine',
        slug: '8'
    },
    {
        icon: FitnessIcon,
        name: 'Fitness',
        slug: '9'
    },
    {
        icon: FashionIcon,
        name: 'Moda',
        slug: '10'
    },
    {
        icon: MusicIcon,
        name: 'Música',
        slug: '11'
    },
    {
        icon: CelebritiesIcon,
        name: 'Celebridades',
        slug: '12'
    },
]

const Container = styled.main`
    width: 90%;
    margin-top: 170px;
    min-height: 100vh;
`
const Title = styled.h3`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.015em;
    margin-top: 32px;
`
const CategoryContainer = styled.section`
    width: 100%;
    filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.25));
    margin-top: 16px;
`
const Category = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    height: 48px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.015em;
    border-bottom: 1px solid rgba(16, 37, 62, 0.5);
    border-radius: 0px;
    background: #FFFFFF;
    padding: 0 11px;
`
const CategoryText = styled.p`
    width: 100%;
    padding-left: 8px;
`
const CategoryRoundedTop = styled(Category)`
    border-radius: 10px 10px 0px 0px;
`
const CategoryRoundedBottom = styled(Category)`
    border-radius: 0px 0px 10px 10px;
    border-bottom: 0;
`
const StyledArrowIcon = styled(ArrowRight)`
    width: 5.59px;
    height: 12px;
`
const index = () => {
  return (
    <Container>
        <Title>
            Hashtags en tendencia
        </Title>
        <PostHashtags postHashtagsInfo={postHashtagsInfo}/>
        <Title>
            Categorías
        </Title>
        <CategoryContainer>
            {categoryData.map((e, i)=>{
                if (i === 0) {
                    return (
                        <Link href={`explorar/categoria/${e.slug}`} key={`${i}-${e}`}>
                            <CategoryRoundedTop key={`${i}-${e}`}>
                                {<e.icon />}
                                <CategoryText>{e.name}</CategoryText>
                                <StyledArrowIcon />
                            </CategoryRoundedTop>
                        </Link>
                    )
                }
                if (i === (categoryData.length - 1)) {
                    return (
                        <Link href={`explorar/categoria/${e.slug}`} key={`${i}-${e}`}>
                            <CategoryRoundedBottom>
                                {<e.icon />}
                                <CategoryText>{e.name}</CategoryText>
                                <StyledArrowIcon />
                            </CategoryRoundedBottom>
                        </Link>
                    )
                }else {
                    return(
                        <Link href={`explorar/categoria/${e.slug}`} key={`${i}-${e}`}>
                            <Category>
                                {<e.icon />}
                                <CategoryText>{e.name}</CategoryText>
                                <StyledArrowIcon />
                            </Category>
                        </Link>
                    )
                }
            })}
        </CategoryContainer>
    </Container>
  )
}

export default index