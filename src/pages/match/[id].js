import React, { useState, useEffect } from 'react'
import router from 'next/router';
import axios from 'axios';
import styled from 'styled-components';
import Wallpapers from '../../component/util/Wallpapers';
import Modal from '../../component/util/Modal';

export default function DetailView() {
  const matchId = router.query.id;
  const [modalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    router.push('/');
  };

  useEffect(() => {
    getDetailPage();
  })

  const getDetailPage = async () => {
    const url = `/match/detail/${matchId}`;
    const res = await axios.get(url);
    console.log(res);
    // try {
    //   if (res.status === 200) {
    //     if (res.data.groupList === null) {
    //       setState({
    //         ...state,
    //         groupList: [],
    //       });
    //       console.log("그룹이 존재하지 않습니다.");
    //     }
    //     else {
    //       setState({
    //         ...state,
    //         groupList: res.data.groupList,
    //       });
    //       console.log("그룹 목록 조회 성공");
    //     }
    //   }
    //   else {
    //     console.log("그룹 목록 조회 실패");
    //     history.back();
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Container>
      <Modal open={modalOpen} close={closeModal} header={"매칭"} />
      <Wallpapers />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  background-color: #F8EFFB;;
`
