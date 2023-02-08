import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import JobCalendar from './JobCalendar';
import YoutubeSlide from './YoutubeSlide';

export default function Slick() {
  const settings = {
    dots: true,  // 점은 안 보이게
    infinite: true, // 무한으로 즐기게
    speed: 500,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1, //1장씩 보이게 해주세요
    // slidesToScroll: 1, //1장씩 넘어가세요
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        <CalendarBox>
          <JobCalendar />
        </CalendarBox>
        <YoutubeSlide>
        </YoutubeSlide>
      </StyledSlider>
    </Container>
  )
}
const Container = styled.div`
  /* overflow:hidden; */
  background-color: #fff;
  height: 438px;
  /* border-bottom: solid 1px black; */
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;

    .slick-slide div{
      /* width: 1000px; */
      height: 438px;
      outline: none;
    }
`;

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   background-color: white;  
// `

const CalendarBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Calendar = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background-color: blue; */

`

const LogoBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  border-top: solid 1px black;
  /* background-color: red; */
`