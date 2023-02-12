import React, { useEffect, useRef, useState } from 'react';
import { useAuthDispatch } from '../../context/auth';
import styled from 'styled-components';
import coffeData from './coffe.json'


const NaverMap = (props) => {
  var markers = [];
  console.log(props);
  const dispatch = useAuthDispatch();
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const selectedMarker = useRef(null);
  const [myLocation, setMyLocation] = useState('');

  if (props.lat !== '') {
    useEffect(() => {
      setMyLocation({
        latitude: props.lat,
        longitude: props.lng,
      });
    }, []);

    useEffect(() => {
      if (typeof myLocation !== 'string') {

        // Naver Map 생성
        mapRef.current = new naver.maps.Map('map', {
          center: new naver.maps.LatLng(props.lat, props.lng),
          zoomControl: true,
        });

        var map = new naver.maps.Map('map', {
          center: new naver.maps.LatLng(props.lat, props.lng),
        });

        var marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(props.lat, props.lng),
          map: map
        });
      }
    }, [myLocation]);
  } else {
    useEffect(() => {
      // geolocation 이용 현재 위치 확인, 위치 미동의 시 기본 위치로 지정
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);

        // 위치추적에 성공했을때 위치 값
        function success(position) {
          setMyLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        }

        // 위치 추적에 실패 했을때 초기값
        function error() {
          setMyLocation({ latitude: 37.4979517, longitude: 127.0276188 });
        }
      }
    }, []);

    useEffect(() => {
      if (typeof myLocation !== 'string') {
        mapRef.current = new naver.maps.Map('map', {
          center: new naver.maps.LatLng(myLocation.latitude, myLocation.longitude),
          zoomControl: true,
        });
        coffeData.coffe.map((item) => {
          var infowindows = [];
          markerRef.current = new naver.maps.Marker({
            position: new naver.maps.LatLng(item.Latitude, item.Longitude),
            map: mapRef.current,
          });

          infowindows.push(new naver.maps.InfoWindow({
            content: [
              '<div class="iw_inner">',
              '   <h3>주역이네 집</h3>',
              '</div>'
            ].join('')
          }));

          for (let i = 0; i < mapRef.current.length; i++) {
            naver.maps.Event.addListener(mapRef.current[i], "click", function (e) {
              if (infowindows[i].getMap()) {
                infowindows[i].close();
              } else {
                infowindows[i].open(map, mapRef.current[i]);
              }
            });
          }

          // infowindows.open(map, markerRef.current[0]);
        });


      }
    }, [mapRef, myLocation]);




  }

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