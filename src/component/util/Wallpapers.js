
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFolder, faComments, faUsersRays, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import styled from 'styled-components';
import FolderGroup from './FolderGroup';

export default function Wallpapers() {
  const now = new Date();
  let month = now.getMonth() + 1;
  month = month >= 10 ? month : month;
  const date = now.getDate();
  const day = now.getDay();
  const dayList = ['일', '월', '화', '수', '목', '금', '토'];
  let hour = now.getHours();
  const meridiem = hour <= 12 ? '오전' : '오후';
  hour = hour <= 12 ? hour : hour - 12;
  let minutes = now.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;

  return (
    <Container>
      <TopMenu>
        <ToolMenu>
          <FontAwesomeIcon icon={faPowerOff} />
        </ToolMenu>
        <CenterMenu />
        <WidgetMenu>
          {month}월 {date}일 ({dayList[day]}) {meridiem} {hour}:{minutes}
        </WidgetMenu>
      </TopMenu>
      <Content>
        <LeftBox>
          <MidBox>

            <MainBox>
              <FolderGroup icon={faUser} title={"마이페이지"} />
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
            <MainBox onClick={() => openModal("닭")}>
              <FolderGroup icon={faFolder} title={"닭"} />
            </MainBox>
          </MidBox>
        </LeftBox>
        <RightBox>
          <RightTop>
            <Slide>

            </Slide>
            <Widget>
              <WeatherBox>
              </WeatherBox>
            </Widget>
          </RightTop>
          <RightBottom>
            <CopyrightBox>
              <Copyright cusor={"cusor"}>
                <FontAwesomeIcon icon={faGithub} size="2x" />
                &nbsp;
                SMASH
              </Copyright>
              <Copyright>
                <FontAwesomeIcon icon={faGoogle} size="2x" />
                &nbsp;
                mintmin0320@gmail.com
              </Copyright>
              <Copyright>
                Copyright 2023.mintmin. All rights reserved.
              </Copyright>
            </CopyrightBox>
          </RightBottom>
        </RightBox>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #EFFBFB;
`

const TopMenu = styled.div`
  width: 100%;
  height: 3%;
  display: flex;
  background-color: #E0F2F7;

  @media ( max-width: 1500px ) {
    height: 4%;
  }
`

const ToolMenu = styled.div`
  width: 4%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CenterMenu = styled.div`
  width: 71%;
  height: 100%;
  display: flex;
`

const WidgetMenu = styled.div`
  width: 24%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Content = styled.div`
  width: 100%;
  height: 97%;
  display: flex;

  @media ( max-width: 1500px ) {
    height: 96%;
  }
`
// 폴더 

const RightBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: rebeccapurple; */
  
`

const RightTop = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: flex-end;
  /* border-bottom: solid 1px black; */
`

const Slide = styled.div`
  width: 75%;
  height: 60%;
`

const Widget = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* border-left: solid 1px black; */
`

const WeatherBox = styled.div`
  width: 100%;
  height: 60%;
  /* border-bottom: solid 1px black; */

  @media ( max-width: 1500px ) {
    height: 81.4%;
  }
`

const RightBottom = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  /* background-color: #fff; */
`

const CopyrightBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
`

const Copyright = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: solid 1px black; */
  cursor: ${(props => (props.cusor === "cusor" ? "pointer" : ""))};
  /* background-color: #fff; */
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

  @media ( max-width: 1500px ) {
    height: 13%;
  }
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