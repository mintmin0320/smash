import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

export default function Slick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
  };
  return (
    <Container>

      <Slider {...settings}>
        <C>
          1
        </C>
        <C>
          2
        </C>

      </Slider>

      <Slider {...settings}>



      </Slider>

    </Container>

  );
}

const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px black;
`

const C = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`