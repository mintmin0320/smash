import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useAuthState } from '../../context/auth'

export default function Comment(props) {
  const { user } = useAuthState();
  const [state, setState] = useState({
    body: '',
    userId: '',
    comment: '',
    cmtList: [],
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    getCmtData();
  }, []);

  const getCmtData = async () => {
    console.log("postId :" + props.postId);
    const url = `/comment/list/${props.postId}`;
    const res = await axios.get(url);
    console.log(res);
    try {
      if (res.status === 200) {
        if (res.data.cmtList === null) {
          setState({
            ...state,
            cmtList: [],
            comment: '',
          });
          console.log("댓글이 존재하지 않습니다.");
        }
        else {
          setState({
            ...state,
            cmtList: res.data.cmtList,
            comment: '',
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
        getCmtData();
      }
      else {
        console.log("댓글 작성 실패");
        history.back();
      }
      setState({
        ...state,
        comment: '',
      });
    } catch (error) {
      console.log(error);
    }
  }

  const CmtList = () => {
    return (
      <React.Fragment>
        {
          state.cmtList.map((item, idx) => {
            return (
              <CommentList key={idx}>
                <CommentId>{item.userId}</CommentId>
                <CommentBody>{item.body}</CommentBody>
                <CommentDate>{item.date}</CommentDate>
              </CommentList>
            )
          })
        };
      </React.Fragment>
    );
  };

  return (
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
  );
};

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

const CommentList = styled.div`
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
`

const CommentBody = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
`

const CommentDate = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`