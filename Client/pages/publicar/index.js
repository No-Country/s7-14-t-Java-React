import React, { useState, useEffect, useContext } from 'react'
import 'node_modules/react-quill/dist/quill.snow.css'
import styled from 'styled-components'
import HashtagIcon from '@/public/icons/HashtagIcon';
import ImgIcon from '@/public/icons/ImgIcon';
import { GlobalContext } from '@/context/GlobalContext';
import { useRouter } from 'next/router';


const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;



const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 600px;
  margin-top: 20px;
  gap: 16px;

  @media (min-width: 768px) {
        width: 70%;
  }
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
  height: 300px;
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
  cursor: pointer;
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
const toBase64 = file => new Promise((resolve, reject) => {
  if (!!file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  } else {
    return
  }
});
const QuillWrapper = styled.div`
  height: auto;
`

const index = () => {

  const [postTitle, setPostTitle] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [quillText, setQuillText] = useState('')
  const [hashtag, setHashtag] = useState('')
  const [image, setImage] = useState('')

  const router = useRouter()

  const {token} = useContext(GlobalContext)

  const postPost = async (data) => {
    
    const url = 'https://sleek-pen-production-f98d.up.railway.app/posts/'
    const postToken = `Bearer ${token}`
  
    try {
      const image = data.image ? await toBase64(data.image) : ''
      console.log(image)
      const res = await fetch(url, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': postToken,
        },
        body: JSON.stringify({
          'text': data.postInfo,
          'title': data.title,
          'images': [{
            'name': 'foto',
            'dataImage': image
          }],
          'hashtag': data.hashtag,
          'category': {
            'name': data.category
          },
        })
      })
      const result = await res.json()
      console.log(result)
      router.push(`/publicacion/${result.id}`)
      return result
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      'title': postTitle,
      'category': selectedCategory,
      'postInfo': quillText,
      'hashtag': hashtag.split(' ').map((e)=> {
        return {'name' : e}
      }),
      'image': image,     
    }
    postPost(form)
    
  }

  return (
    <Container>
     <StyledForm onSubmit={handleSubmit}>
        <TitleInput type='text' placeholder='Añade un titulo' value={postTitle} onChange={(e) => setPostTitle(e.target.value)}/>
        <CategoryInput value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="" hidden>Selecciona una categoría</option>
          <option value="Cocina" >Cocina</option>
          <option value="Videojuegos" >Videojuegos</option>
          <option value="Viajes" >Viajes</option>
          <option value="Deportes" >Deportes</option>
          <option value="Negocios" >Negocios</option>
          <option value="Politica" >Política</option>
          <option value="Televisión" >Televisión</option>
          <option value="Cine" >Cine</option>
          <option value="Fitness" >Fitness</option>
          <option value="Moda" >Moda</option>
          <option value="Música" >Música</option>
          <option value="Celebridades" >Celebridades</option>
        </CategoryInput>
        <QuillWrapper>
          <Quill theme="snow" value={quillText} onChange={(e) => setQuillText(e)} placeholder='Introduce tu texto aquí...' />
        </QuillWrapper>
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