import styled from 'styled-components';

export default function Mypage() {
  return (
    <Container>
      <TopBox>
        <LeftBox>
          <ProfileBox>

          </ProfileBox>
        </LeftBox>
        <RightBox>

        </RightBox>
      </TopBox>
      <BottomBox>

      </BottomBox>
      마이페이지
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
  background-color: beige;
`