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
          </LocationBox>
        </InfoBox>
      </LeftBox>
      <RightBox>
        <TopBox>
          <MyInfo>
            여기에는 회원가입 시  자기소개 같은 느낌으로다가
          </MyInfo>
        </TopBox>
        <BottomBox>
          <TitleBox>
            Group
          </TitleBox>
          <MyGroupList>
            <MyGroup>
              여기에 코테 뱃지처럼 현재 그룹 표시하자..
            </MyGroup>
          </MyGroupList>

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
  display: flex;
  justify-content: center;
  align-items: center;
`

const MyInfo = styled.div`
  width: 95%;
  height: 90%;
  border: solid 1px black;
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

const MyGroupList = styled.div`
  width: 95%;
  height: 90%;
  display: flex;
  align-items: center;
`

const MyGroup = styled.div`
  width: 100%;
  height: 95%;
`

const TextBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props => (props.text === "pass" ? "none" : "solid"))} 1px black;
`