import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';


export default function DetailPage(props) {

  useEffect(() => {
    getDetailPage();
  })

  const getDetailPage = async () => {
    const url = `/match/detail/${props.matchId}`;
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
      <Content>


        <TopBox>
          <TitleBox>
            <Title>
              제목
            </Title>
          </TitleBox>
          <InfoBox>
            <Writer>
              <InfoText>박하민</InfoText>
            </Writer>
            <Count>
              <InfoText>3/4</InfoText>
            </Count>
            <Date>
              <InfoText>2022 10 11</InfoText>
            </Date>
          </InfoBox>


        </TopBox>
        <CategoryBox>
          <Category>
            여기에는 카테고리 종류
          </Category>

        </CategoryBox>
        <BodyBox>
          ss
        </BodyBox>


      </Content>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #9bbbd4;
`

const Content = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff; 
  overflow-y: scroll;
  overflow: hidden;
`

const TopBox = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`

const TitleBox = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
`

const Title = styled.div`
  width: 100%;
  height: 70%;
  /* border-radius: 15px 15px 15px 15px; */
  background-color: #F5F5F5; 
`

const InfoBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InfoText = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F5F5F5;
`

const Writer = styled.div`
  width: 33.3%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Count = styled.div`
  width: 33.3%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

const Date = styled.div`
  width: 33.3%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CategoryBox = styled.div`
  width: 90%;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Category = styled.div`
  width: 100%;
  height: 200px;
  border: solid 1px black;
`

const BodyBox = styled.div`
  width: 90%;
  height: 350px;
  border: solid 1px black;
`