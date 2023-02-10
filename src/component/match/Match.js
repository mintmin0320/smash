import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faRotateRight, faBars, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import DetailPage from './DetailPage';
import Recruit from './Recruit';
import data from './categoryList'


export default function Match() {
  const [state, setState] = useState({
    body: '',
    userId: '',
    comment: '',
    keyword: '',
    menu: false,
    detail: false,
    recruit: false,
    matchId: '',
    num: '',
    category: '',
    groupList: [],
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleChange = (value) => {
    if (value === "menu") {
      setState({
        ...state,
        menu: !state.menu,
        num: '',
      });
    }
    else if (value === "recruit") {
      setState({
        ...state,
        recruit: true,
        detail: false,
      });
    }
    else if (value === "refresh") {
      window.location.reload();
    }
  };

  useEffect(() => {
    getGroupList();
  }, []);

  const handleClick = (idx, item) => {
    console.log(idx, item);
    setState({
      ...state,
      category: item,
      num: idx,
    });
    console.log(state.category)
    getGroupList("classification", item);
  };

  const getGroupList = async (classification, item) => {
    console.log(classification);
    if (classification === undefined) {
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
    } else {
      console.log(state.category);
      const url = `/match/classification/${item}`;
      const res = await axios.get(url);
      console.log(res);
      try {
        if (res.status === 200) {
          if (res.data.groupList === null) {
            setState({
              ...state,
              groupList: [],
            });
            console.log("분류 실패");
          }
          else {
            setState({
              ...state,
              groupList: res.data.groupList,
            });
            console.log("분류 성공");
          }
        }
        else {
          alert("분류 실패(error)");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSearchButton = () => {
    if (state.keyword === '') {
      alert("Please enter your search term !!");
    } else {
      getSearchTitle();
    }
  }

  const getSearchTitle = async () => {
    const url = `/match/${state.keyword}`
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

  const GroupList = () => {
    return (
      <ListBox>
        {
          state.groupList.map((item, idx) => {
            return (
              <List key={idx} onClick={() => handleDetailView(item._id)}>
                <Profile>
                  <ProfileImg
                    src={`http://localhost:8080/images/${item.author.fileName}`}
                  />
                </Profile>
                <ListDetail>
                  <Writer>{item.author.userId}</Writer>
                  <Title>[ {item.category} ]&nbsp;&nbsp;{item.title}</Title>
                </ListDetail>
              </List>
            )
          })
        }
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
          <MenubarButton onClick={() => handleChange("refresh")}>
            <FontAwesomeIcon icon={faRotateRight} size="2x" />
          </MenubarButton>
          <MenubarButton onClick={() => handleChange("recruit")}>
            <FontAwesomeIcon icon={faUserPlus} size="2x" />
          </MenubarButton>
          <MenubarButton onClick={() => handleChange("menu")}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </MenubarButton>
        </WriteButtonBox>
      </TopBox>
      {
        state.detail ?
          <DetailPage matchId={state.matchId} />
          :
          state.recruit ?
            <Recruit />
            :
            <Content>
              <ListBox>
                <GroupList />
              </ListBox>
              {state.menu
                ?
                <MenuBox>
                  <CategoryList>
                    <Item />
                  </CategoryList>
                  <ButtonBox>
                    <ConfirmButton>
                      선택
                    </ConfirmButton>
                  </ButtonBox>
                </MenuBox>
                :
                <BlankBox />
              }
            </Content>
      }
      {!state.detail && !state.recruit && (
        <SearchBox>
          <Input
            type="text"
            value={state.keyword}
            name="keyword"
            onChange={handleInputChange}
            maxLength={15}
          // placeholder="Please enter your search term"
          // onKeyPress={(e) => { handleEnterPress("pw", e) }}
          />
          <SearchButton onClick={handleSearchButton}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
          </SearchButton>
        </SearchBox>
      )}
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

const MenubarButton = styled.div`
  width: 33.3%;
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
  justify-content: flex-end;
  overflow-y: scroll;
  /* overflow: hidden; */
`

const ListBox = styled.div`
  width: 68%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
`

const List = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  /* border-bottom: solid 1px black; */
  cursor: pointer;
  &:hover{  
    background-color : skyblue;
  }

  /* @media ( max-width: 1500px ) {
    height: 10px;
  } */
`

const Profile = styled.div`
  width: 10%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProfileImg = styled.img`
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background-color: white;

  @media ( max-width: 1500px ) {
    height: 80%;
    width: 80%;
  }
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

const BlankBox = styled.div`
  width: 30%;
  height: 100%;
`

const MenuBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E6E6E6;
  border-left: solid 1px #E6E6E6;
  border-right: solid 1px #E6E6E6;
`

const CategoryList = styled.div`
  width: 95%;
  height: 50%;  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  @media ( max-width: 1500px ) {
  height: 80%;  
    grid-template-columns: 1fr 1fr 1fr;
  }

  .card{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    &.active {
      background-color: black;
      color: #fff;
    }
  }
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
  justify-content: center;
`

const ButtonBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;

`

const ConfirmButton = styled.div`
  width: 30%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: black;
  color: white;
  border-radius: 12px 12px 12px 12px;
  border: solid 1px black;
`