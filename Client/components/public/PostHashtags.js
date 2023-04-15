import ArrowRight from '@/public/icons/ArrowRight'
import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    margin-top: 16px;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
    justify-content: space-between;

`

const Hashtags = styled.div`
    width: auto;
    height: 32px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    background: #FFFFFF;
    border-radius: 8px;
    text-align: center;
    padding: 8px 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
`

const PostHashtags = ({postHashtagsInfo}) => {
    console.log(postHashtagsInfo)
  return (
    <Container>
        {postHashtagsInfo && postHashtagsInfo.map((e, i)=>{
            return (
                <Hashtags key={`${i}-${e}`}>
                    {e}
                </Hashtags>
            )

        })}
    </Container>
  )
}

export default PostHashtags