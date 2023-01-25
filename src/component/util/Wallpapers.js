import { faUser, faFolder, faComments, faUsersRays } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import FolderGroup from './FolderGroup';

export default function Wallpapers() {
  return (
    <Content>
      <LeftBox>
        <MidBox>
          <MainBox>
            <FolderGroup icon={faUser} title={"내정보"} />
          </MainBox>
        </MidBox>
        <MidBox>
          <MainBox>
            <FolderGroup icon={faComments} title={"커뮤니티"} />
          </MainBox>
        </MidBox>
        <MidBox>
          <MainBox>
            <FolderGroup icon={faUsersRays} title={"매칭"} />
          </MainBox>
        </MidBox>
        <MidBox>
          <MainBox>
            <FolderGroup icon={faFolder} title={"닭"} />
          </MainBox>
        </MidBox>
        <MidBox>
          <MainBox>
            <FolderGroup icon={faFolder} title={"따오기"} />
          </MainBox>
        </MidBox>
      </LeftBox>
      <RighttBox>
        <RightTop>
          여긴 달력을 두자
        </RightTop>
        <RightBottom>
          <BlankBox />
          <LogoBox>
            <LogoSize>
            </LogoSize>
          </LogoBox>
        </RightBottom>
      </RighttBox>
    </Content>
  )
}

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`
// 폴더 

const RighttBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const RightTop = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: center;
`

const RightBottom = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`

const BlankBox = styled.div`
  width: 70%;
  height: 100%;
`

const LogoBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoSize = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LeftBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const MidBox = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
`

const MainBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
  &:hover{  
    border: solid #FAFAFA;
  }

  .link-css-box {
    width: 100%;
    height: 100%;
  }
`