import React, { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';
import useMap from './useMap';


const NaverMap = ({ getLocation }) => {
  // useMap();
  const mapRef = useRef(null);
  const [myLocation, setMyLocation] = useState('');
  const [latitude, setLatitude] = useState(''); // 위도
  const [longitude, setLongitude] = useState(''); // 경도

  useEffect(() => {
    // geolocation 이용 현재 위치 확인, 위치 미동의 시 기본 위치로 지정
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
  }, []);

  useEffect(() => {
    if (typeof myLocation !== 'string') {
      // 현재 위치 추적
      let currentPosition = [myLocation.latitude, myLocation.longitude];

      // Naver Map 생성
      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
      });

      var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
      });

      var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        map: map
      });

      naver.maps.Event.addListener(map, 'click', function (e) {
        marker.setPosition(e.latlng);
        setLatitude(e.latlng._lat);
        setLongitude(e.latlng._lng);
        console.log(e.latlng);
      });
    }
  }, [myLocation]);



  return (
    <Container id="map" />
  );
};

const Container = styled.div`
  width: 700px;
  height: 400px;
  border: solid 1px black;
`

export default NaverMap;