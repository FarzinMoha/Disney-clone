import React from 'react'
import styled from 'styled-components'
import ItemViewers from './ItemViewers'
import image1 from '../../assets/images/viewers-disney.png'
import image2 from '../../assets/images/viewers-marvel.png'
import image3 from '../../assets/images/viewers-national.png'
import image4 from '../../assets/images/viewers-pixar.png'
import image5 from '../../assets/images/viewers-starwars.png'
import video1 from '../../assets/videos/1564674844-disney.mp4'
import video2 from '../../assets/videos/1564676115-marvel.mp4'
import video3 from '../../assets/videos/1564676296-national-geographic.mp4'
import video4 from '../../assets/videos/1564676714-pixar.mp4'
import video5 from '../../assets/videos/1608229455-star-wars.mp4'

const Viewers = () => {
  return (
    <Container>
        <ItemViewers src={image1} videoSrc= {video1} />
        <ItemViewers src={image2} videoSrc= {video2} />
        <ItemViewers src={image3} videoSrc= {video3} />
        <ItemViewers src={image4} videoSrc= {video4} />
        <ItemViewers src={image5} videoSrc= {video5} />
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