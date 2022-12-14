import React from 'react';
import styled from 'styled-components';
import useMap from './useMap';


const NaverMap = () => {
  useMap();
  return (
    <Container>
      <div id="map"></div>
    </Container>
  );
};

const Container = styled.div`
width: 800px;
height:300px;
border: solid 1px black;
`

export default NaverMap;