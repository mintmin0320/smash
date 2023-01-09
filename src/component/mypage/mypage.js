import styled from 'styled-components';
import Slick from '../util/Slick';

export default function Mypage() {
  return (
    <Container>
      <Slick />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const TopBox = styled.div`
  width: 100%;
  height: 30%;
`

const LeftBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

const ProfileBox = styled.div`
  width: 50%;
  height: 50%;
  border: solid 1px gray;
`

const RightBox = styled.div`
  width: 70%;
  height: 100%;
`

const BottomBox = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: beige;
`

const InfoBox = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  border: solid 1px black;
`

const InfoTitle = styled.div`
  width: 50%;
  height: 100%;
  border-right: solid 1px black;
`

const InfoBody = styled.div`
  width: 50%;
  height: 100%;
`

const TextBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props => (props.text === "pass" ? "none" : "solid"))} 1px black;
`