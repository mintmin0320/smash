import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Comment(props) {
  const userId = localStorage.getItem("userId");
  const [state, setState] = useState({
    body: '',
    commentId: '',
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

  const handleDeleteButton = async (id) => {
    const url = `/comment/delete`
    const res = await axios.delete(url, {
      data: {
        commentId: id,
      }
    })
    console.log(res);
    try {
      if (res.data.result) {
        alert("삭제완료!");
        getCmtData();
      }
      else {
        alert("삭제실패!");
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
      userId,
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
                {userId === item.userId && (
                  <CommentDelete
                    onClick={() => handleDeleteButton(item._id)}
                  >
                    X
                  </CommentDelete>
                )}
                <CommentId>{item.userId}</CommentId>
                <CommentBody>{item.body}</CommentBody>
                <CommentDate>{item.date}</CommentDate>
              </CommentList>
            )
          })
        }
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

const CommentDelete = styled.div`
  width: 5%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  cursor: pointer;
`

const CommentList = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  border-bottom: solid 2px #F2F2F2;
`

const CommentId = styled.div`
  width: 23%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CommentBody = styled.div`
  width: 62%;
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