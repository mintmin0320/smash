import React from 'react'
import styled from 'styled-components';


export default function DetailPage() {
  return (
    <Container>
      <div>제목, 분야, 작성자</div>
      <div>내용 설명</div>
      <div>방장이 희망하는 장소 주변 지도</div>
      <div>현재 인원수</div>
      <div></div>

    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`