import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    margin-top: 16px;
    flex-wrap: wrap;
    width: 90%;
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

const PostHashtags = () => {
  return (
    <Container>
        <Hashtags>
            #PostHashtags
        </Hashtags>
        <Hashtags>
            #PostHashtags
        </Hashtags>
        <Hashtags>
            #PostHashtags
        </Hashtags>
    </Container>
  )
}

export default PostHashtags