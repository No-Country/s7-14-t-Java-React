import React, { useState } from 'react'
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'node_modules/react-quill/dist/quill.snow.css'
import styled from 'styled-components'
import HashtagIcon from '@/public/icons/HashtagIcon';
import ImgIcon from '@/public/icons/ImgIcon';



const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 600px;
  margin-top: 20px;
  gap: 16px;
`
const TitleInput = styled.input`
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  height: 48px;
  background: #FFFFFF;
  outline: none;
  border: 0;
  padding: 8px 16px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;

  &::placeholder {

  }
`

const CategoryInput = styled.select`
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  height: 48px;
  background: #FFFFFF;
  outline: none;
  border: 0;
  padding: 8px 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  &::after {
    color: blue;
    background-color: red;
  }
`

const HashtagContainer = styled.div`
  position: relative;
  width: 100%;
`
const HashtagInput = styled.input`
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  height: 48px;
  background: #FFFFFF;
  outline: none;
  border: 0;
  padding-left: 48px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  width: 100%;
`
const ImageInput = styled.input`
  display: none;
`
const ImageLabel = styled.label`
  display: flex;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  height: 48px;
  background: #FFFFFF;
  border: 0;
  padding: 8px 16px;
  justfy-content: center;
  position: relative;
`

const ImageLabelText = styled.span`
font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  color: #757575;
  padding: 0 0 0 35px;
  align-self: center;
  
`

const Quill = styled(ReactQuill)`
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background: #FFFFFF;
  height: 312px;
`

const PostButton = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  background: #5673BF;
  border-radius: 10px;
  height: 40px;
  width: 154px;
  filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.25));
  border: 0;
  color: #FFFFFF;
  align-self: end;
`
const ImgIcon2 = styled(ImgIcon)`
  opacity: 0.5;
  position: absolute;
  top: 11px;
`
const HashtagIcon2 = styled(HashtagIcon)`
  opacity: 0.5;
  position: absolute;
  top: 14px;
  left: 20px;
`

const index = () => {

  const [postTitle, setPostTitle] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [quillText, setQuillText] = useState('')
  const [hashtag, setHashtag] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    // const form = e.target;
    // const formData = new FormData(form);
    // const formJson = Object.fromEntries(formData.entries())
    // console.log(formJson)

    const form = {
      'title': postTitle,
      'category': selectedCategory,
      'postInfo': quillText,
      'hashtag': hashtag,
      'image': image,     
    }


    console.log(form)
  }

  return (
    <Container>
     <StyledForm onSubmit={handleSubmit}>
        <TitleInput type='text' placeholder='Añade un titulo' value={postTitle} onChange={(e) => setPostTitle(e.target.value)}/>
        <CategoryInput value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="" hidden>Selecciona una categoría</option>
          <option value="cocina" >Cocina</option>
          <option value="videojuegos" >Videojuegos</option>
          <option value="viajes" >Viajes</option>
          <option value="deportes" >Deportes</option>
          <option value="negocios" >Negocios</option>
          <option value="politica" >Política</option>
          <option value="television" >Televisión</option>
          <option value="cine" >Cine</option>
          <option value="fitness" >Fitness</option>
          <option value="moda" >Moda</option>
          <option value="musica" >Música</option>
          <option value="celebridades" >Celebridades</option>
        </CategoryInput>

        <Quill theme="snow" value={quillText} onChange={(e) => setQuillText(e)} placeholder='Introduce tu texto aquí...'/>
        <HashtagContainer>
          <HashtagInput name='hashtags' value={hashtag} onChange={(e) => setHashtag(e.target.value)} placeholder='Añade hashtags'/>
          <HashtagIcon2 />
        </HashtagContainer>
        <ImageInput type='file' id='addImg'accept='image/*' onChange={(e) => setImage(e.target.files[0])}/>
        <ImageLabel htmlFor='addImg'>
          <ImgIcon2 />
          <ImageLabelText>
            Añade imágenes
          </ImageLabelText>          
        </ImageLabel>
        

        <PostButton type='submit' onClick={handleSubmit}>Publicar</PostButton>
     </StyledForm> 
    </Container>
  )
}

export default index