import styled from 'styled-components';
import ImgUpload from '../util/ImgUpload';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Mypage() {
  const [state, setState] = useState({
    name: '',

  });
  if (typeof window !== 'undefined') {
    var userId = localStorage.getItem("userId");
  }

  const getProfileData = async () => {
    const url = `/user/profile-download/${userId}`
    const res = await axios.post(url);
    console.log(res);
    try {
      setState({
        ...state,
        name: res.data.user.fileName,

      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getProfileData
  })

  return (
    <Container>
      <LeftBox>
        <ImgUpload />

        <InfoBox>
          <NameBox>
            Name
          </NameBox>
          <IdBox>
            {userId}
          </IdBox>
          <LocationBox>
            {/* 거주지 */}
          </LocationBox>
        </InfoBox>
      </LeftBox>
      <RightBox>
        <TopBox>

        </TopBox>
        <BottomBox>
          <TitleBox>
            Group
          </TitleBox>


        </BottomBox>
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

const LocationBox = styled.div`
  width: 75%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
`

const RightBox = styled.div`
  width: 68%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #D8D8D8;
  border-radius: 10px 10px 10px 10px;
`

const TopBox = styled.div`
  width: 100%;
  height: 25%;
`

const BottomBox = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleBox = styled.div`
  width: 95%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 26px;
  border-bottom: solid 1px #D8D8D8;
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