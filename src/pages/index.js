import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFolder, faComments, faUsersRays, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';
import Router from "next/router";
import axios from 'axios';
import styled from 'styled-components';
import Modal from '../component/util/Modal';
import FolderGroup from '../component/util/FolderGroup';
import Title from '../component/util/Title'
import SignOutBtn from '../component/util/SignOutBtn'
import Weather from '../component/util/widget/Weather';
import Slick from '../component/util/widget/Slick';
import NaverMap from '../component/util/NaverMap';

export default function Home() {
  const now = new Date();
  let month = now.getMonth() + 1;
  month = month >= 10 ? month : month;
  const date = now.getDate();
  const day = now.getDay();
  const dayList = ['일', '월', '화', '수', '목', '금', '토'];
  let hour = now.getHours();
  const meridiem = hour <= 12 ? '오전' : '오후';
  hour = hour <= 12 ? hour : hour - 12;


  const [modalOpen, setModalOpen] = useState(false);
  const [folderName, setefolderName] = useState("");
  const [nowMinutes, setMinutes] = useState('');

  // useEffect(() => {
  //   const timeId = setInterval(() => {
  //     const now = new Date();
  //     let minutes = now.getMinutes();
  //     minutes = minutes < 10 ? '0' + minutes : minutes;
  //     setMinutes(minutes);
  //     console.log(nowMinutes)
  //   }, 50000)

  //   return () => {
  //     clearInterval(timeId)
  //     console.log("hi")
  //   }
  // }, [nowMinutes])

  const openModal = (id) => {
    setModalOpen(true);
    setefolderName(id);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <Title title="Home" />
      <Modal open={modalOpen} close={closeModal} header={folderName} />
      <TopMenu>
        <ToolMenu>
          <FontAwesomeIcon icon={faPowerOff} />

        </ToolMenu>
        <CenterMenu />
        <WidgetMenu>
          {month}월 {date}일 ({dayList[day]}) {meridiem} {hour}:{nowMinutes}
        </WidgetMenu>

      </TopMenu>
      <Content>
        <LeftBox>
          <MidBox>
            <Link href="/mypage" legacyBehavior>
              <MainBox>
                <FolderGroup icon={faUser} title={"마이페이지"} />
              </MainBox>
            </Link>
          </MidBox>
          <MidBox>
            <Link href="/community" legacyBehavior>
              <MainBox>
                <FolderGroup icon={faComments} title={"커뮤니티"} />
              </MainBox>
            </Link>
          </MidBox>
          <MidBox>
            <Link href="/match" legacyBehavior>
              <MainBox>
                <FolderGroup icon={faUsersRays} title={"매칭"} />
              </MainBox>
            </Link>
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
              <Slick />
            </Slide>
            <Widget>
              <WeatherBox>
                <Weather />
              </WeatherBox>
            </Widget>
          </RightTop>
          <RightBottom>
            <CopyrightBox>
              <Link href="https://github.com/mintmin0320/smash" legacyBehavior>
                <Copyright cusor={"cusor"}>
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                  &nbsp;
                  SMASH
                </Copyright>
              </Link>
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

// export const getServerSideProps = async ({ req, res }) => {
//   try {
//     const cookie = req.headers.cookie;
//     //쿠키가 없다면 에러를 보내기
//     if (!cookie) throw new Error("Missing auth token cookie");

//     // 그 쿠키를 이용해서 백엔드에서 인증 처리하기
//     const res = await axios.get("/auth/signStatus", { headers: { cookie } })
//     console.log(res.data);

//     console.log("로그인상태");

//     return { props: {} }

//   } catch (error) {
//     console.log("로그인상태 x");
//     res.writeHead(307, { Location: "/auth" }).end();
//     return { props: {} }
//   }
// };

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