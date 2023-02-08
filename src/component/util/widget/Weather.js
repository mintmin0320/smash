import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { WindyAnimation, SunAnimation, RainAnimation } from '../Lottie';

export default function Weather() {
  const [myLocation, setMyLocation] = useState('');
  const [state, setState] = useState({
    tmp: '',
    pty: '',
  });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert('현재 위치를 알 수 없어 기본 위치로 지정합니다.');
      setMyLocation({ latitude: 37.4862618, longitude: 127.1222903 });
    }
  }

  const getWeatherData = async () => {
    const url = `/widget/weather`;
    const res = await axios.get(url);
    console.log(res);
    try {
      if (res.status === 200) {
        setState({
          ...state,
          sky: res.data.sky,
          tmp: res.data.tmp,
        });
        console.log("날씨 조회 성공!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // getLocation();
    getWeatherData();
  }, []);

  return (
    <Container>
      <SkyState>
        {state.sky === "1" ? <SunAnimation /> : state.sky === "3" ? <WindyAnimation /> : <RainAnimation />}
      </SkyState>
      <Temperatures>
        <HighBox>
          현재 : &nbsp;
          {state.tmp}°C
        </HighBox>
        <LowBox>
          하늘 : &nbsp;
          {state.sky === "1" ? "맑음" : state.sky === "3" ? "구름많음" : "흐림"}
        </LowBox>
      </Temperatures>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`

const SkyState = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Temperatures = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HighBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
`

const LowBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: blue;
`