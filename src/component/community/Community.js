import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faUser, faPencil } from "@fortawesome/free-solid-svg-icons";

export default function Community() {
  const [state, setState] = useState({
    search: '',
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container>
      <TopBox>
        <ProfilBox>
          <ProfilImg>
            <Profil>
              <FontAwesomeIcon icon={faUser} size="2x" />
            </Profil>
          </ProfilImg>
          <ProfilText>
            hamin
          </ProfilText>
        </ProfilBox>
        <SearchBox>
          <Input
            type="text"
            value={state.search}
            name="search"
            onChange={handleInputChange}
            maxLength={10}
            placeholder="Please enter your search term"
          // onKeyPress={(e) => { handleEnterPress("pw", e) }}
          />
        </SearchBox>
        <ButtonBox search={"search"}>
          <FontAwesomeIcon icon={faLocationArrow} size="3x" />
        </ButtonBox>
        <ButtonBox>
          <FontAwesomeIcon icon={faPencil} size="3x" />
        </ButtonBox>
      </TopBox>
      <BottomBox>
        <PostBox>
          <PostWriter>hamin</PostWriter>
          <PostTitle>nextjs 어렵다</PostTitle>
          <PostContent>넥스트제이에스는영국에서부터시작한..편지로 이편지를 받은</PostContent>
          <PostDate>2022-12-27</PostDate>
        </PostBox>
        <PostBox>
          <PostWriter>hamin</PostWriter>
          <PostTitle>node는 쉽다</PostTitle>
          <PostContent>곧 퇴근시간인데 노드 정리한 것 보면서 쉬세요</PostContent>
          <PostDate>2022-12-27</PostDate>
        </PostBox>
        <PostBox>
          <PostWriter>hamin</PostWriter>
          <PostTitle>node는 쉽다</PostTitle>
          <PostContent>곧 퇴근시간인데 노드 정리한 것 보면서 쉬세요</PostContent>
          <PostDate>2022-12-27</PostDate>
        </PostBox>
        <PostBox>
          <PostWriter>hamin</PostWriter>
          <PostTitle>node는 쉽다</PostTitle>
          <PostContent>곧 퇴근시간인데 노드 정리한 것 보면서 쉬세요</PostContent>
          <PostDate>2022-12-27</PostDate>
        </PostBox>
        <PostBox>
          <PostWriter>hamin</PostWriter>
          <PostTitle>node는 쉽다</PostTitle>
          <PostContent>곧 퇴근시간인데 노드 정리한 것 보면서 쉬세요</PostContent>
          <PostDate>2022-12-27</PostDate>
        </PostBox>
        <PostBox>
          <PostWriter>hamin</PostWriter>
          <PostTitle>node는 쉽다</PostTitle>
          <PostContent>곧 퇴근시간인데 노드 정리한 것 보면서 쉬세요</PostContent>
          <PostDate>2022-12-27</PostDate>
        </PostBox>
        <PostBox>
          <PostWriter>hamin</PostWriter>
          <PostTitle>node는 쉽다</PostTitle>
          <PostContent>곧 퇴근시간인데 노드 정리한 것 보면서 쉬세요</PostContent>
          <PostDate>2022-12-27</PostDate>
        </PostBox>
        <PostBox>
          <PostWriter>hamin</PostWriter>
          <PostTitle>node는 쉽다</PostTitle>
          <PostContent>곧 퇴근시간인데 노드 정리한 것 보면서 쉬세요</PostContent>
          <PostDate>2022-12-27</PostDate>
        </PostBox>
        <PostBox>
          <PostWriter>hamin</PostWriter>
          <PostTitle>node는 쉽다</PostTitle>
          <PostContent>곧 퇴근시간인데 노드 정리한 것 보면서 쉬세요</PostContent>
          <PostDate>2022-12-27</PostDate>
        </PostBox>
        <PostBox>
          <PostWriter>hamin</PostWriter>
          <PostTitle>node는 쉽다</PostTitle>
          <PostContent>곧 퇴근시간인데 노드 정리한 것 보면서 쉬세요</PostContent>
          <PostDate>2022-12-27</PostDate>
        </PostBox>


      </BottomBox>
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
  height: 10%;
  display: flex;
  border-bottom: solid 3px #F2F2F2;
  
`
// 검색 - 프로필
const ProfilBox = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
`

const ProfilImg = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Profil = styled.div`
  width: 80%;
  height: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #FAFAFA;
  border: solid 1px lightgrey;
`

const ProfilText = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
`

const SearchBox = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: center;
  border-left: solid 3px #F2F2F2;
`

// 검색창
const Input = styled.input`
  font-size: 24px;
  border: none;
  width: 98%;
  height: 100%;

  &:focus{
    outline: none;
  }
`
// 검색, 글쓰기 버튼
const ButtonBox = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-right: ${(props => (props.search === "search" ? "solid" : "none"))} 3px #F2F2F2;
`

const BottomBox = styled.div`
  width: 100%;
  height: 85%;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 100px;
  align-items: center;
  place-items: center;
  /* overflow: hidden;  */
  padding-top: 30px;
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
