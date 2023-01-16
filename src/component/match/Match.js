import styled from 'styled-components';
import NaverMap from '../util/NaverMap'


export default function Match() {
  return (
    <Container>
      <TopBox>
        <WriteButtonBox />
        <FolderNameBox>
          그룹 매칭
        </FolderNameBox>
        <WriteButtonBox>

        </WriteButtonBox>
      </TopBox>
      <Content>
        <ListBox>
          <List>
            <Profile>
              <ProfileImg />
            </Profile>
            <ListDetail>
              <Writer>
                hamin
              </Writer>
              <Title>
                [ 코딩 ] 코딩 스터디그룹 멤버를 구합니다!!
              </Title>
            </ListDetail>
          </List>
        </ListBox>
      </Content>
      <SearchBox>
      </SearchBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #9bbbd4;
`

const TopBox = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  border-bottom: solid 1px grey;
`

const FolderNameBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bolder;
`

const WriteButtonBox = styled.div`
  width: 15%;
  height: 100%;
`

const Content = styled.div`
  width: 100%;
  height: 83%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  overflow: hidden;
`

const ListBox = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
`

const List = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
`

const Profile = styled.div`
  width: 10%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

const ProfileImg = styled.div`
  width: 50%;
  height: 80%;
  border-radius: 50%;
  background-color: white;
`

const ListDetail = styled.div`  
  height: 100%;
`

const Writer = styled.div`
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
`

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: white;
  border-radius: 5px 5px 5px 5px;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;

`

const SearchBox = styled.div`
  width: 100%;
  height: 7%;
  background-color: white;
`