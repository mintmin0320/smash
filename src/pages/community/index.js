import { useState } from 'react';
import router from "next/router";
import axios from 'axios';
import styled from 'styled-components';
import Modal from '../../component/util/Modal';
import Title from '../../component/util/Title'
import SignOutBtn from '../../component/util/SignOutBtn'
import Wallpapers from '../../component/util/Wallpapers';
import MenuTools from '../../component/util/MenuTools';

export default function Community() {
  const [modalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    router.push('/');
  };

  return (
    <Container>
      <Title title="community" />
      <Modal open={modalOpen} close={closeModal} header={"커뮤니티"} />
      <Wallpapers />
      <SignOutBtn />
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
  justify-content: center;
  background-color: #F8EFFB;;
`