import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Post(props) {
  const [state, setState] = useState({
    title: '',
    body: '',
    userId: '',
  });

  const getPostData = async () => {
    console.log(props.postId);
    const url = `/post/detail/${props.postId}`
    const res = await axios.get(url);
    console.log(res);
    try {
      if (res.status === 200) {
        setState({
          ...state,
          title: res.data.result.title,
          body: res.data.result.body,
          userId: res.data.result.author.userId,
        });
        console.log("게시물 조회 성공");
      }
      else {
        console.log("게시물 조회 실패");
        history.back();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <Container>
      <TopBox>
        {state.title}{state.body}{state.userId}
      </TopBox>
      <BottomBox>
      </BottomBox>
      <ButtonBox>

      </ButtonBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TopBox = styled.div`
  width: 85%;
  height: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`
// 검색창
const Input = styled.input`
  font-size: 22px;
  border: none;
  width: 95%;
  height: 95%;
  border: solid 2px #E6E6E6;
  border-radius: 10px 10px 10px 10px;
  padding-right: 10px;
  padding-left: 10px;

  &:focus{
    outline: none;
  }
`

const BottomBox = styled.div`
  width: 85%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

// 검색창
const Textarea = styled.textarea`
  font-size: 22px;
  border: none;
  width: 95%;
  height: 95%;
  border: solid 2px #E6E6E6;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  padding-right: 10px;
  padding-top: 10px;
  padding-left: 10px;
  white-space: pre-line;

  &:focus{
    outline: none;
  }
`

const ButtonBox = styled.div`
  width: 85%;
  height: 20%;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const WriteButton = styled.button`
  width: 15%;
  height: 40%;
  border: solid 1px #D8D8D8;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`
