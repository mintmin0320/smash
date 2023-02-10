import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faUser, faPencil, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import WritePost from './Write';
import Post from './Post';

export default function Community() {
  const [state, setState] = useState({
    search: '',
    write: false,
    post: false,
    postId: '',
    postList: [],
    fileName: '',
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const getPostList = async () => {
    const url = `/post/list`
    const res = await axios.get(url);
    console.log(res);
    try {
      setState({
        ...state,
        postList: res.data.postList,
        fileName: res.data.postList.author.fileName,
        write: false,
        post: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchButton = () => {
    if (state.search === '') {
      alert("Please enter your search term !!");
    } else {
      getSearchPost();
    }
  }

  const getSearchPost = async () => {
    const url = `/post/${state.search}`
    const res = await axios.get(url);
    console.log(res);
    try {
      setState({
        ...state,
        postList: res.data.postList,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostList();
  }, []);

  const handleRefreshButton = () => {
    getPostList();
  };

  const handleWriteButton = () => {
    setState({
      ...state,
      write: true,
    });
  };

  const handleViewPost = async (id) => {
    console.log(id);
    setState({
      ...state,
      postId: id,
      post: true
    });
  };

  const PostList = () => {
    return (
      <BottomBox>
        {
          state.postList.map((item, idx) => {
            return (
              <PostBox key={idx} onClick={() => handleViewPost(item._id)}>
                <PostWriter>{item.author.userId}</PostWriter>
                <PostTitle>{item.title}</PostTitle>
                <PostContent>{item.body}</PostContent>
                <PostDate>{item.date}</PostDate>
              </PostBox>
            )
          })
        }
      </BottomBox>
    )
  }

  return (
    <Container>
      <TopBox>
        <ProfilBox>
          {/* <ProfilImg>
            <Profil
              src={`http://localhost:8080/images/${state.fileName}`}
            />
          </ProfilImg> */}
        </ProfilBox>
        <SearchBox>
          <Input
            type="text"
            value={state.search}
            name="search"
            onChange={handleInputChange}
            maxLength={15}
            placeholder="Please enter your search term"
          // onKeyPress={(e) => { handleEnterPress("pw", e) }}
          />
        </SearchBox>
        <ButtonBox search={"search"} onClick={handleSearchButton}>
          <FontAwesomeIcon icon={faLocationArrow} size="2x" />
        </ButtonBox>
        <ButtonBox onClick={handleWriteButton}>
          <FontAwesomeIcon icon={faPencil} size="2x" />
        </ButtonBox>
        <ButtonBox onClick={handleRefreshButton}>
          <FontAwesomeIcon icon={faRotateRight} size="2x" />
        </ButtonBox>
      </TopBox>
      {state.write ?
        <WritePost />
        :
        state.post ?
          <Post postId={state.postId} />
          :
          <PostList />
      }
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
// 검색
const TopBox = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  border-bottom: solid 3px #F2F2F2;

  @media ( max-width: 1500px ) {
    height: 10%;
  }
`
// 검색 - 프로필
const ProfilBox = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
`

const ProfilImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Profil = styled.img`
  width: 30%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #F5F5F5;
  /* border: solid 1px lightgrey; */
`

const SearchBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  border-left: solid 3px #F2F2F2;
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
// 검색, 글쓰기 버튼
const ButtonBox = styled.div`
  width: 5%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;;
  border-right: ${(props => (props.search === "search" ? "solid" : "none"))} 3px #F2F2F2;
`

const BottomBox = styled.div`
  width: 100%;
  height: 93%;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 65px;
  align-items: center;
  place-items: center;
  /* overflow: hidden;  */
  padding-top: 20px;

  @media ( max-width: 1500px ) {
    height: 90%;
  }
`
// 게시물
const PostBox = styled.div`
  width: 90%;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`
// 작성자
const PostWriter = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: flex-end;
  font-size: 14px;
`
// 글제목
const PostTitle = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  color: #086A87;
  font-size: 30px;
  font-weight: bold;
`
// 글내용(미리보기)
const PostContent = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  font-size: 15px;

`
// 작성일
const PostDate = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  color: #A4A4A4;
`
