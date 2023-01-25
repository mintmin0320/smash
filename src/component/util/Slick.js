import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

export default function Slick() {
  const settings = {
    dots: true,  // 점은 안 보이게
    infinite: true, // 무한으로 즐기게
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1, //4장씩 보이게 해주세요
    slidesToScroll: 1, //1장씩 넘어가세요
  };

  return (
    <Container>

      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`


// const Wrap = styled.div`
//   width: 100%;
//   height: 100%;
// `