import styled from 'styled-components';

export default function Mypage() {
  return (
    <Container>
      <TopBox>
        <LeftBox>
          <ProfileBox>
            프로필
          </ProfileBox>
        </LeftBox>
        <RightBox>

        </RightBox>
      </TopBox>
      <BottomBox>
        <InfoBox>
          <InfoTitle>
            <TextBox>아이디</TextBox>
            <TextBox>전화번호</TextBox>
            <TextBox>기타</TextBox>
            <TextBox>기타</TextBox>
            <TextBox text={"pass"}>기타</TextBox>


          </InfoTitle>
          <InfoBody>
            <TextBox>zzang</TextBox>
            <TextBox>01012345678</TextBox>
            <TextBox></TextBox>
            <TextBox></TextBox>
            <TextBox text={"pass"}></TextBox>

          </InfoBody>
        </InfoBox>
      </BottomBox>
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