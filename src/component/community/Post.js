import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useAuthState } from '../../context/auth'

export default function Post(props) {
  const { user } = useAuthState();
  const [state, setState] = useState({
    title: '',
    body: '',
    userId: '',
    comment: '',
    date: '',
    cmtList: [],
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

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
          userId: res.data.result.author.userId,
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

  const getCmtData = async () => {
    const url = `/comment/list`;
    const params = {
      postId: props.postId
    };
    const res = await axios.get(url, params);
    console.log(res);
    try {
      if (res.status === 200) {
        if (res.data.cmtList === null) {
          setState({
            ...state,
            cmtList: [],
          });
          console.log("댓글이 존재하지 않습니다.");
        }
        else {
          setState({
            ...state,
            cmtList: res.data.cmtList,
          });
          console.log("댓글 조회 성공");
        }
      }
      else {
        console.log("댓글 조회 실패");
        history.back();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleWriteCmt = async () => {
    const url = `/comment/write`
    const params = {
      cmtBody: state.comment,
      postId: props.postId,
      userId: "hamin"
    }
    const res = await axios.post(url, params);
    console.log(res);
    try {
      if (res.status === 200) {
        console.log("댓글 작성 성공");
      }
      else {
        console.log("댓글 작성 실패");
        history.back();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleBackButton = () => {
    window.location.reload();
  };

  useEffect(() => {
    getPostData();
  }, []);



  const CmtList = () => {
    return (
      <React.Fragment>
        {
          state.cmtList.map((item, idx) => {
            return (
              <Comment key={idx}>
                <CommentId>{item.author.userId}</CommentId>
                <CommentBody>{item.body}</CommentBody>
              </Comment>
            )
          })
        };
      </React.Fragment>
    );
  };

  return (
    <Container>
      <TopBox>
        {state.title}
      </TopBox>
      <BottomBox>
        <Content>
          <AuthorBox>
            작성자 : {state.userId}&nbsp;&nbsp;&nbsp;{state.date}
          </AuthorBox>
          <BodyBox>
            {state.body}
          </BodyBox>
          <MenuBox>
            <ListButton onClick={handleBackButton}>
              목록
            </ListButton>
            {state.userId === user && (
              <ListButton>
                삭제
              </ListButton>
            )}
          </MenuBox>
        </Content>
        <CommentBox>
          <TextareaBox>
            <Textarea
              type="text"
              value={state.comment}
              name="comment"
              onChange={handleInputChange}
              maxLength={100}
            />
            <WriteButton onClick={handleWriteCmt}>
              확인
            </WriteButton>
          </TextareaBox>
          <CmtList />
        </CommentBox>
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

const CommentBox = styled.div`
  width: 100%;
  height: 10%;
`

const TextareaBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const WriteButton = styled.div`
  width: 5%;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 10px 10px 0;
  background-color: #F2F2F2;
  cursor: pointer;
`
// 검색창
const Textarea = styled.textarea`
  font-size: 22px;
  border: none;
  width: 95%;
  height: 100%;
  border: solid 2px #E6E6E6;
  border-radius: 10px 0 0 10px;
  display: flex;
  padding-right: 10px;
  padding-top: 10px;
  padding-left: 10px;
  white-space: pre-line;

  &:focus{
    outline: none;
  }
`

const Comment = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  border-bottom: solid 2px #F2F2F2;
`

const CommentId = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 2px #F2F2F2;
`

const CommentBody = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: solid 2px #F2F2F2;
`