import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faRotateRight, faBars } from "@fortawesome/free-solid-svg-icons";
import NaverMap from '../util/NaverMap'
import router from 'next/router'
import DetailPage from './DetailPage';


export default function Match() {
  const [state, setState] = useState({
    body: '',
    userId: '',
    comment: '',
    search: '',
    menu: false,
    detail: false,
    matchId: '',
    groupList: [],
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleClickMenu = () => {
    setState({
      ...state,
      menu: !state.menu,
    });
  };

  const handleRefreshButton = () => {
    window.location.reload();
  };

  useEffect(() => {
    getGroupList();
  }, []);

  const getGroupList = async () => {
    const url = `/match/list`;
    const res = await axios.get(url);
    console.log(res);
    try {
      if (res.status === 200) {
        if (res.data.groupList === null) {
          setState({
            ...state,
            groupList: [],
          });
          console.log("그룹이 존재하지 않습니다.");
        }
        else {
          setState({
            ...state,
            groupList: res.data.groupList,
          });
          console.log("그룹 목록 조회 성공");
        }
      }
      else {
        console.log("그룹 목록 조회 실패");
        history.back();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchButton = () => {
    if (state.search === '') {
      alert("Please enter your search term !!");
    } else {
      getSearchTitle();
    }
  }

  const aa = (e, id) => {
    console.log(id);
    router.push({
      pathname: `/match/${id}`,
      query: { id: id },
    },
      `/match/${id}`
    );
  }

  const getSearchTitle = async () => {
    const url = `/match/${state.search}`
    console.log(url);
    const res = await axios.get(url);
    console.log(res);
    try {
      if (res.status === 200) {
        setState({
          ...state,
          groupList: res.data.matchList,
        });
        console.log("그룹 검색 성공");
      } else {
        console.log("그룹 검색 실패");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDetailView = async (id) => {
    console.log(id);
    setState({
      ...state,
      matchId: id,
      detail: true
    });
  };

  const GroupList = () => {
    return (
      <ListBox>
        {
          state.groupList.map((item, idx) => {
            return (
              <List key={idx} onClick={() => handleDetailView(item._id)}>
                <Profile>
                  <ProfileImg />
                </Profile>
                <ListDetail>
                  <Writer>hamin</Writer>
                  <Title>{item.title}</Title>
                </ListDetail>
              </List>
            )
          })
        };
      </ListBox>
    );
  };

  return (
    <Container>
      <TopBox>
        <WriteButtonBox />
        <FolderNameBox>
          그룹 매칭
        </FolderNameBox>
        <WriteButtonBox>
          <RefreshButton onClick={handleRefreshButton}>
            <FontAwesomeIcon icon={faRotateRight} size="2x" />
          </RefreshButton>
          <MenubarButton onClick={handleClickMenu}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </MenubarButton>
        </WriteButtonBox>
      </TopBox>
      {state.menu
        ?
        <MenuBox />
        :
        state.detail ?
          <DetailPage matchId={state.matchId} />
          :
          <Content>
            <ListBox>
              {/* <GroupList /> */}
            </ListBox>
          </Content>
      }
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
        <SearchButton onClick={handleSearchButton}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
        </SearchButton>
      </SearchBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #9bbbd4;
`

const TopBox = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  border-bottom: solid 1px grey;
`

const FolderNameBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bolder;
`

const WriteButtonBox = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  border-left: ${(props => (props.search === "search" ? "solid" : "none"))} 1px black;
`

const RefreshButton = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const MenubarButton = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Content = styled.div`
  width: 100%;
  height: 83%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  overflow: hidden;
`

const ListBox = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
`

const List = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  cursor: pointer;

  &:hover{  
    background-color : skyblue;
  }
`

const Profile = styled.div`
  width: 10%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

const ProfileImg = styled.div`
  width: 50%;
  height: 80%;
  border-radius: 50%;
  background-color: white;
`

const ListDetail = styled.div`  
  height: 100%;
`

const Writer = styled.div`
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
`

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: white;
  border-radius: 5px 5px 5px 5px;
  padding: 8px;
  font-size: 16px;
`

const SearchBox = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  background-color: white;
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

const SearchButton = styled.div`
  width: 7%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const MenuBox = styled.div`
  width: 100%;
  height: 83%;
  /* display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  overflow: hidden; */
  background-color: red;
`