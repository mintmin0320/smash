import styled from 'styled-components';
import NaverMap from '../util/NaverMap'


export default function Mypage() {
  return (
    <Container>
      <LeftBox>
        <ProfileBox>
          <Profile></Profile>
        </ProfileBox>
        <InfoBox>
          <NameBox>
            Name
          </NameBox>
          <IdBox>
            Id
          </IdBox>
        </InfoBox>
      </LeftBox>
      <RightBox>

      </RightBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

const LeftBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  `

const ProfileBox = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Profile = styled.div`
  width: 70%;
  height: 80%;
  border-radius: 50%;
  border: solid 2px #D8D8D8;
`

const InfoBox = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NameBox = styled.div`
  width: 75%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  font-size: 22px;
  font-weight: bold;
`

const IdBox = styled.div`
  width: 75%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  color: #BDBDBD;
`

const RightBox = styled.div`
  width: 68%;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #D8D8D8;
  border-radius: 10px 10px 10px 10px;
`



const InfoTitle = styled.div`
  width: 50%;
  height: 100%;
  border-right: solid 2px black;
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