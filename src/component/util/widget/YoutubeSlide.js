import React from 'react'
import styled from 'styled-components'

export default function YoutubeSlide() {
  return (
    <Container>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/FJiTSTTJDYw?&mute=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
