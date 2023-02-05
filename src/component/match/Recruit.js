import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useAuthState } from '../../context/auth';
import NaverMap from '../util/NaverMap';
import data from './categoryList';


export default function Recruit() {
  const { location } = useAuthState();
  console.log(location);
  const [state, setState] = useState({
    title: '',
    count: '',
    body: '',
    userId: '',
    category: '',
    num: '',
    latitude: location._lat,
    longitude: location._lng,
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = (idx, item) => {
    console.log(idx, item);
    setState({
      ...state,
      category: item,
      num: idx,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGroupData();
  }

  const setGroupData = async () => {
    const url = `/match/recruit`
    const params = {
      title: state.title,
      count: state.count,
      body: state.body,
      category: state.category,
      latitude: location._lat,
      longitude: location._lng,
    }
    console.log(params)
    try {
      const res = await axios.post(url, params);
      console.log(res);
      if (res.status === 200) {
        window.location.reload();
      }
      else {
        history.back();
      }
    } catch (e) {
      console.log(e);
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
                className={"card" + (idx === state.num ? " active" : "")}
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
      <Form onSubmit={handleSubmit}>
        <TopBox>
          <TitleBox>
            <Title>
              <Input
                type="text"
                value={state.title}
                name="title"
                onChange={handleInputChange}
                maxLength={15}
                required={true}
                style={{ background: "#F2F2F2" }}
              // placeholder="Please enter your search term"
              // onKeyPress={(e) => { handleEnterPress("pw", e) }}
              />
            </Title>
          </TitleBox>
          <InfoBox>
            <Writer>
              <InfoText></InfoText>
            </Writer>
            <Count>
              <InfoText>
                <Input
                  type="text"
                  value={state.count}
                  name="count"
                  onChange={handleInputChange}
                  maxLength={1}
                  placeholder="maximum memver"
                  required={true}
                  style={{ background: "#F2F2F2" }}
                />
              </InfoText>
            </Count>
            <Date>
              <InfoText></InfoText>
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
              <Textarea
                type="text"
                value={state.body}
                name="body"
                onChange={handleInputChange}
                maxLength={800}
              />
            </BodyBox>
          </Content>
          <LocationBox >
            <LocationInfo>
              희망지역
            </LocationInfo>
            <Location>
              <NaverMap lat={''} />
              <WriteBox>
                <Write>
                  확인
                </Write>
              </WriteBox>
            </Location>
          </LocationBox>
        </BottomBox>
      </Form>
    </Container >
  );
};

const Container = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9bbbd4;
  overflow-y: scroll;
`

const TopBox = styled.div`
  width: 85%;
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

// 검색창
const Input = styled.input`
  font-size: 22px;
  border: none;
  width: 98%;
  height: 100%;
  
  &:focus{
    outline: none;
  }
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
  width: 85%;
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

const BodyBox = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  justify-content: flex-start;
  /* border: solid 1px black; */
  padding-left: 6px;
  background-color: #F2F2F2;
`

// 검색창
const Textarea = styled.textarea`
  font-size: 22px;
  border: none;
  width: 95%;
  height: 95%;
  background-color: #F2F2F2;
  display: flex;
  padding-right: 10px;
  padding-top: 10px;
  padding-left: 10px;
  white-space: pre-line;

  &:focus{
    outline: none;
  }
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
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
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

const WriteBox = styled.div`
  width: 82%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Write = styled.button`
  width: 25%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F2F2F2;
`

const Form = styled.form`
  width: 98.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
