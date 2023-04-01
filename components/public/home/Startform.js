import styled from 'styled-components'

export const Prov = () =>  {
  return (
    <Main>
      <div className="startform">
        <h1>Hola a todos</h1>
      </div>
    </Main>
  )
}

const Main = styled.div`
.startform{
  margin-top: 20rem;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  h1{
    color: #000;
    font-size: 2em;
    text-align: center;
    margin-top: 50px;
  }
}
`