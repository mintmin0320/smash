import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'


export default function JobCalendar() {
  return (
    <Container>
      <iframe
        id="pageFrame"
        name="pageFrame"
        src="http://www.jobkorea.co.kr/Starter/calendar/sub/week"

        width="99%"
        height="100%"
        className='job'
        scrolling="auto">
      </iframe>
      <LogoBox>
        <Image src={'/job_logo.png'} alt="error" width="350" height="150" />
      </LogoBox>

    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  
  flex-direction :column ;
  display: flex;
  align-items: center;
  .job {
    height: 900px;
  }
`

const LogoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
