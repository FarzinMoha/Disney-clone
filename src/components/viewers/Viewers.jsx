import React from 'react'
import styled from 'styled-components'
import ItemViewers from './ItemViewers'

const Viewers = () => {
  return (
    <Container>
        <ItemViewers src='/images/viewers-disney.png' videoSrc='/videos/1564674844-disney.mp4'/>
        <ItemViewers src='/images/viewers-marvel.png' videoSrc='/videos/1564676115-marvel.mp4'/>
        <ItemViewers src='/images/viewers-national.png' videoSrc='/videos/1564676296-national-geographic.mp4'/>
        <ItemViewers src='/images/viewers-pixar.png' videoSrc='/videos/1564676714-pixar.mp4'/>
        <ItemViewers src='/images/viewers-starwars.png' videoSrc='/videos/1608229455-star-wars.mp4'/>
    </Container>
  )
}

const Container = styled.div`
margin-top:30px;
padding: 30px 0px 26px;
display:grid;
grid-gap:25px;
grid-template-columns:repeat(5,minmax(0,1fr));
@media (max-width:769px){
    grid-template-columns:repeat(1,minmax(0,1fr));

}
`

export default Viewers