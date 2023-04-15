import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Tags, TagsContainer } from '../common/Tags'

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

const PostDetail = () => {
  return (
    <Card>
        <TitleContainer>
            <Title>
                Mi guiso de lentejas
            </Title>
            <LikeIcon src="/../public/icons/favorite-icon.png" width={18} height={16} alt='like-icon'/>
        </TitleContainer>
        <TagsContainer>
            <Tags>
                Cocina
            </Tags>
        </TagsContainer>
        <PostText>
        El guiso de lentejas es para mí el guiso por excelencia, el que mejor me sale, el que hago casi a ciegas. Una comida ideal para comer en los días fríos, porque enseguida sube la temperatura corporal, además como es bien rendidor y bastante económico es muy práctico para cocinar cuando tenemos muchos invitados. Les recomiendo hacer mucho y frisarlo en porciones para tener siempre listo para esos días en los que queremos comer rico sin cocinar y sin gastar!

Ingredientes: Rinde 6 porciones
Lentejas: 500g
Cebollas: 2
Morrón colorado: 1
Zanahorias: 2
Panceta ahumada: un trozo de alrededor de 100g
Chorizo colorado: 1
Papas: 2
Salsa de tomate: 700cm3
Pimentón: 1 cucharadita
Pimienta: A gusto
Ají molido: 1 pizca
Sal: A gusto

Procedimiento
Paso 1
Remojar las lentejas en agua por alrededor de 2 horas
Paso 2
Cortar las cebollas, el morrón y las zanahorias en cuadraditos de la misma medida. Saltear en una cacerola con un poco de aceite durante unos minutos. 
Paso 3
Agregar la panceta cortada en trocitos pequeños y saltear unos minutos con el resto de las verduras (en este punto se puede agregar un chorrito de vino tinto).
Paso 4
Cortar el chorizo colorado y agregar al resto de los ingredientes, luego agregar las lentejas previamente remojadas con un poco del líquido del remojo y la papa cortada en cubitos.
Paso 5
Agregar la salsa de tomates y revolver para integrar todo. Los ingredientes tienen que quedar sumergidos en el líquido. Condimentar con sal, pimienta, pimentón y una pizca de ají molido.
Paso 6
Una vez que hierva, bajar el fuego al mínimo y cocinar por alrededor de 35/45 minutos hasta que las lentejas, las papas y las zanahorias estén tiernas. Apagar el fuego y dejar reposar unos minutos antes de servir. Siempre es más rico cuanto más reposo tiene, de hecho si lo pueden hacer el día anterior o el mismo día a la mañana, mejor. 

        </PostText>

        <LikeCommentContainer>
            <Image src="/../public/icons/like-icon.png" width={16.76} height={15.57} alt='like-icon'/>
            <LikeCommentCount>
                1.2 mil
            </LikeCommentCount>
        </LikeCommentContainer>
        
    </Card>
  )
}

export default PostDetail