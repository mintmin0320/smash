import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Comment from './Comment';

export default function Post(props) {
  const userId = localStorage.getItem("userId");
  const [state, setState] = useState({
    title: '',
    body: '',
    postId: '',
    date: '',
  });

  useEffect(() => {
    getPostData();
  }, []);

  const getPostData = async () => {
    const url = `/post/detail/${props.postId}`
    const res = await axios.get(url);
    console.log(res);
    try {
      if (res.status === 200) {
        setState({
          ...state,
          title: res.data.result.title,
          body: res.data.result.body,
          postId: res.data.result.userId,
          date: res.data.result.date,
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

  const handleDeleteButton = async () => {
    const url = `/post/delete`
    const res = await axios.delete(url, {
      data: {
        postId: state.postId,
      }
    })
    console.log(res);
    try {
      if (res.data.result) {
        alert("삭제완료!");
        window.location.reload();
      }
      else {
        alert("삭제실패!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRefreshButton = () => {
    window.location.reload();
  };

  return (
    <Container>
      <TopBox>
        {state.title}
      </TopBox>
      <BottomBox>
        <Content>
          <AuthorBox>
            작성자 : {state.postId}&nbsp;&nbsp;&nbsp;{state.date}
          </AuthorBox>
          <BodyBox>
            {state.body}
          </BodyBox>
          <MenuBox>
            <ListButton onClick={handleRefreshButton}>
              목록
            </ListButton>
            {state.postId === userId && (
              <ListButton onClick={handleDeleteButton}>
                삭제
              </ListButton>
            )}
          </MenuBox>
        </Content>
        <Comment postId={props.postId} />
      </BottomBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`

const TopBox = styled.div`
  width: 95%;
  height: 10%;
  border-bottom: solid 3px #F2F2F2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bolder;
  `

const BottomBox = styled.div`
  width: 95%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AuthorBox = styled.div`
  width: 95%;
  justify-content: flex-end;
  height: 8%;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #848484
`

const BodyBox = styled.div`
  width: 100%;
  height: 77%;
  display: flex;
  font-size: 18px;
`

const MenuBox = styled.div`
  width: 30%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 18px;
  `

const ListButton = styled.div`
  width: 30%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 10px 10px;
  font-size: 18px;
  background-color: #F2F2F2;
  cursor: pointer;
`