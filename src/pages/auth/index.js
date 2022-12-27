import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import Title from '../../component/util/Title'
import MenuBar from '../../component/util/MenuBar'

export default function Home() {
  const now = new Date();
  const nowDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeStyle: 'short' }).format(now);

  return (
    <Container>
      <Title title="auth" />
      <Wrap>
        <MenuBar />
        <Content>
          <HeaderShellBox>
            Welcome to SMASH!!&nbsp;&nbsp;{nowDate}&nbsp;on console
          </HeaderShellBox>
          <LogoBox>
            <Image src={'/logo.png'} alt="error" width="800" height="250" />
          </LogoBox>
          <br />
          <QuarterBox>
            <Link href="/auth/signIn" legacyBehavior>
              <QuarterButton>
                <QuarterText>Sign In</QuarterText>
              </QuarterButton>
            </Link>
            <Link href="/auth/signUp" legacyBehavior>
              <QuarterButton>
                <QuarterText>Sign Up</QuarterText>
              </QuarterButton>
            </Link>
            <QuarterButton>
              <QuarterText>Utils</QuarterText>
            </QuarterButton>
          </QuarterBox>
        </Content>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F8EFFB;
`

const Wrap = styled.div`
  width: 50%;
  height: 65%;
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  border-radius: 13px;
  overflow-y: scroll;
  overflow: hidden;
  background: black;
  box-shadow: 10px 10px 15px rgb(0,0,0,0.5);
`
// 메뉴바
const MenubarBox = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  border-bottom: solid 1px black;
  border-radius: 13px 13px 0px 0px;
  background: #585858;
`

const ButtonBox = styled.div`
  width: 9%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const MenuButton = styled.button`
  width: 14px;
  height: 14px;
  display: flex;
  border: solid 1px ${(props => (props.btnColor === "red" ? "#F78181" : props.btnColor === "orange" ? "#F7BE81" : "#01DF01"))};
  border-radius: 50%;
  background: ${(props => (props.btnColor === "red" ? "#F78181" : props.btnColor === "orange" ? "#F7BE81" : "#01DF01"))};
`
// 메인 컨텐츠
const Content = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 1px black;
`

const HeaderShellBox = styled.div`
  width: 98.5%;
  height: 10%;
  display: flex;
  font-size: 20px;
  color: white;
`
// 로고
const LogoBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  font-size: 18px;
  color: white;
`
// 버튼 분기
const QuarterBox = styled.div`
  width: 100%;
  height: 30%;
  display: grid;
  align-items: center;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
`

const QuarterButton = styled.div`
  width: 55%;
  height: 45%;
  background: black;
  color: white; 
  border: dashed 1px #82FA58;
  cursor: pointer;
`

const QuarterText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  color: #82FA58;
`