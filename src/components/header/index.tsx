import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  flex: 1;
  max-height: 6rem;
  align-items: center;
  justify-content: flex-end;
  nav{
    height: 6rem;
    padding: 0 1rem;
    display: flex;
    jusify-content: center;
    align-items: center;
    ul{
      display: flex;
      gap: 1rem;
    }
  }
`

export const Header=()=>{
    return (<HeaderWrapper>
  <nav>
      <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Quem Somos</a></li>
    <li><a href="#">Nossa Historia</a></li>
    <li><a href="#">Confirmação</a></li>
    <li><a href="#">Conhaça os Padrinhos</a></li>
    <li><a href="#">O Casamento</a></li>
    <li><a href="#">Local</a></li>
    <li><a href="#">Galeria</a></li>
  </ul>
  </nav>
  </HeaderWrapper>)
}