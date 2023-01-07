import React, { useEffect, useState } from 'react';
import { faUser, faFolder, faComments } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import Router from "next/router";
import axios from 'axios';
import styled from 'styled-components';
import Modal from '../component/util/Modal';
import FolderGroup from '../component/util/FolderGroup';
import Title from '../component/util/Title'
import SignOutBtn from '../component/util/SignOutBtn'
import Weather from '../component/util/widget/Weather';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [folderName, setefolderName] = useState("");

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
      <Content>
        <LeftBox>
          <MidBox>
            <MainBox onClick={() => openModal("내정보")}>
              <FolderGroup icon={faUser} title={"내정보"} />
            </MainBox>
          </MidBox>
          <MidBox>
            <Link href="/community" legacyBehavior>
              <MainBox>
                <FolderGroup icon={faComments} title={"커뮤니티"} />
              </MainBox>
            </Link>
          </MidBox>
          <MidBox>
            <MainBox onClick={() => openModal("꿩")}>
              <FolderGroup icon={faFolder} title={"꿩"} />
            </MainBox>
          </MidBox>
          <MidBox>
            <MainBox onClick={() => openModal("닭")}>
              <FolderGroup icon={faFolder} title={"닭"} />
            </MainBox>
          </MidBox>
          <MidBox>
            <MainBox onClick={() => openModal("따오기")}>
              <FolderGroup icon={faFolder} title={"따오기"} />
            </MainBox>
          </MidBox>
        </LeftBox>
        <RighttBox>
          <RightTop>
            <Widget>
              <WeatherBox>
                {/* <Weather /> */}
              </WeatherBox>
            </Widget>
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
      <SignOutBtn />
    </Container>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  try {
    const cookie = req.headers.cookie;
    //쿠키가 없다면 에러를 보내기
    if (!cookie) throw new Error("Missing auth token cookie");

    // 그 쿠키를 이용해서 백엔드에서 인증 처리하기
    const res = await axios.get("/auth/signStatus", { headers: { cookie } })
    console.log(res.data);

    console.log("로그인상태");

    return { props: {} }

  } catch (error) {
    console.log("로그인상태 x");
    res.writeHead(307, { Location: "/auth" }).end();
    return { props: {} }
  }
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  background-color: #F9F2F8;
`

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
  justify-content: flex-end;
  /* border-bottom: solid 1px black; */
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