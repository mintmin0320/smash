import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faJava, faPython, faJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faC, faRobot, faLock, faGlobe, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import NaverMap from '../util/NaverMap';


export default function Recruit(props) {
  const [state, setState] = useState({
    title: '',
    count: '',
    body: '',
    userId: '',
    category: '',
    cc: false,
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = (item) => {
    console.log(item);
    setState({
      ...state,
      category: item,
      cc: true
    });
  };

  // useEffect(() => {
  //   getPostData();
  // }, []);

  // const getPostData = async () => {
  //   const url = `/post/detail/${props.postId}`
  //   const res = await axios.get(url);
  //   console.log(res);
  //   try {
  //     if (res.status === 200) {
  //       setState({
  //         ...state,
  //         title: res.data.result.title,
  //         body: res.data.result.body,
  //         userId: res.data.result.author.userId,
  //         date: res.data.result.date,
  //       });
  //       console.log("게시물 조회 성공");
  //     }
  //     else {
  //       console.log("게시물 조회 실패");
  //       history.back();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container>
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
              <Card onClick={() => handleClick("java")} check={state.cc}>
                <CardLogo>
                  <FontAwesomeIcon icon={faJava} size="4x" />
                </CardLogo>
                <CardTitle>Java</CardTitle>
              </Card>
              <Card onClick={() => handleClick("python")} check={state.cc}>
                <CardLogo>
                  <FontAwesomeIcon icon={faPython} size="4x" />
                </CardLogo>
                <CardTitle>Python</CardTitle>
              </Card>
              <Card onClick={() => handleClick("c")}>
                <CardLogo>
                  <FontAwesomeIcon icon={faC} size="4x" />
                </CardLogo>
                <CardTitle>C</CardTitle>
              </Card>
              <Card onClick={() => handleClick("js")}>
                <CardLogo>
                  <FontAwesomeIcon icon={faJs} size="4x" />
                </CardLogo>
                <CardTitle>JS</CardTitle>
              </Card>
              <Card onClick={() => handleClick("db")}>
                <CardLogo>
                  <FontAwesomeIcon icon={faDatabase} size="4x" />
                </CardLogo>
                DB
              </Card>
              <Card onClick={() => handleClick("iot")}>
                <CardLogo>
                  <FontAwesomeIcon icon={faRobot} size="4x" />
                </CardLogo>
                IoT
              </Card>
              <Card onClick={() => handleClick("android")}>
                <CardLogo>
                  <FontAwesomeIcon icon={faAndroid} size="4x" />
                </CardLogo>
                <CardTitle>Android</CardTitle>
              </Card>
              <Card onClick={() => handleClick("security")}>
                <CardLogo>
                  <FontAwesomeIcon icon={faLock} size="4x" />
                </CardLogo>
                <CardTitle>Security</CardTitle>
              </Card>
              <Card onClick={() => handleClick("network")}>
                <CardLogo>
                  <FontAwesomeIcon icon={faGlobe} size="4x" />
                </CardLogo>
                <CardTitle>Network</CardTitle>
              </Card>
              <Card onClick={() => handleClick("etc")}>
                <CardLogo>
                  <FontAwesomeIcon icon={faEllipsis} size="4x" />
                </CardLogo>
                <CardTitle>ETC</CardTitle>
              </Card>
            </Category>
          </CategoryBox>
          <BodyBox>
            <Textarea
              type="text"
              value={state.postBody}
              name="postBody"
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
            <NaverMap />
          </Location>
        </LocationBox>
      </BottomBox>
    </Container >
  );
};

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
  justify-content: center;
`

const Card = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: solid 1px white;
  cursor: pointer;
  background-color: ${(props => (props.check ? "red" : "blue"))};
`

const SelectedCard = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  cursor: pointer;
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
`