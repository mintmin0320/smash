import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import NaverMap from '../util/NaverMap';
import data from './categoryList';

export default function DetailPage(props) {
  const [state, setState] = useState({
    body: '',
    title: '',
    date: '',
    category: '',
    count: '',
    lat: '',
    lng: '',
  });

  useEffect(() => {
    getDetailPage();
  }, []);

  const getDetailPage = async () => {
    const url = `/match/detail/${props.matchId}`;
    const res = await axios.get(url);
    console.log(res);
    try {
      if (res.status === 200) {
        setState({
          ...state,
          title: res.data.result.title,
          body: res.data.result.body,
          category: res.data.result.category,
          date: res.data.result.date,
          count: res.data.result.count,
          lat: res.data.result.latitude,
          lng: res.data.result.longitude,
        });
        console.log('페이지 상세조회 성공');
      } else {
        console.log('페이지 상세조회 실패');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Item = () => {
    return (
      <React.Fragment>
        {
          data.map((item, idx) => {
            return (
              <div key={idx}
                onClick={() => handleClick(idx, item.title)}
                value={idx}
                className={"card" + (item.title === state.category ? " active" : "")}
              >
                <CardLogo>{item.icon}</CardLogo>
                <CardTitle>{item.title}</CardTitle>
              </div>
            )
          })
        }
      </React.Fragment>
    );
  }

  return (
    <Container>
      <TopBox>
        <TitleBox>
          <Title>
            {state.title}  [{state.category}]
          </Title>
        </TitleBox>
        <InfoBox>
          <Writer>
            <InfoText>작성자</InfoText>
          </Writer>
          <Count>
            <InfoText>남은인원수/ {state.count}</InfoText>
          </Count>
          <Date>
            <InfoText>{state.date}</InfoText>
          </Date>
        </InfoBox>
      </TopBox>
      <BottomBox>
        <Content>
          <CategoryBox>
            <Category>
              <Item />
            </Category>
          </CategoryBox>
          <BodyBox>
            {state.body}
          </BodyBox>
        </Content>
        <LocationBox >
          <LocationInfo>
            희망지역
          </LocationInfo>
          <Location>
            <NaverMap lat={state.lat} lng={state.lng} />
          </Location>
        </LocationBox>
      </BottomBox>
    </Container >
  )
}

const Container = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #9bbbd4;
  overflow-y: scroll;
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
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  /* border-radius: 15px 15px 15px 15px; */
  background-color: #F5F5F5; 
`

const InfoBox = styled.div`
  width: 85%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InfoText = styled.div`
  width: 85%;
  height: 60%;
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

const BottomBox = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`

const Content = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CategoryBox = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`

const Category = styled.div`
  width: 100%;
  height: 70%;
  /* border: solid 1px black; */
  background-color: #F2F2F2;
  display: flex;

  .card{
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: solid 1px white;
    cursor: pointer;

    &.active {
      background-color: black;
      color: #fff;
    }
  }
`

const CardLogo = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardTitle = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BodyBox = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  justify-content: flex-start;
  /* border: solid 1px black; */
  padding-left: 6px;
  background-color: #F2F2F2;
`

const LocationBox = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LocationInfo = styled.div`
  width: 81%;
  height: 100px;
  display: flex;
  align-items: flex-end;
  font-size: 28px;
  padding-top: 10px;
  padding-bottom: 10px;
`

const Location = styled.div`
  width: 100%;
  height: 500px;
  background-color: #fff;
  display: flex;
  justify-content: center;
`
