import Title from '../../component/util/title'
import axios from 'axios'
import styled from 'styled-components'
import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router';
// import InputGroup from '../components/InputGroup'

export default function Home() {
  let router = useRouter();
  const now = new Date();
  const nowDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeStyle: 'short' }).format(now);
  const time = useRef(0)
  const timerId = useRef(null);
  // const inputFocus = useRef(null);
  const [gauge, setgauge] = useState(0);
  const [state, setState] = useState({
    userId: '',
    userPw: '',
    result: false,
    quarter: false,
    login: false,
    idResult: false,
    pwResult: false,
    idValidation: false,
    pwValidation: false,
  })

  // useEffect(() => {
  //   inputFocus.current.focus();
  // }, []);

  const handleInputChange = () => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleOnLogin = (e) => {
    setState({
      ...state,
      login: true,
      quarter: true,
    });
  };

  const handleEnterPress = (params, e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      if (params === 'id') {
        // handleIdCheck();
        if (e.target.value === 'hamin') {
          setState({
            ...state,
            idResult: true,
            idValidation: true,
          });
        }
        else {
          setState({
            ...state,
            idResult: false,
            idValidation: true,
          });
        }
      }
      else {
        handlePwCheck();
        if (e.target.value === '1234') {
          setState({
            ...state,
            pwResult: true,
            pwValidation: true,
          });
        }
        else {
          setState({
            ...state,
            pwResult: false,
            pwValidation: true,
          });
        }
      }
    }
  };

  const handleIdCheck = async () => {
    // const url = `http://192.168.219.100:8080/user/id`
    const url = `http://localhost:8080/user/id`
    const params = {
      userId: state.userId,
    }
    try {
      const res = await axios.post(url, params);
      console.log(res);
      console.log(params);
      if (res.data.idResult) {
        setState({
          ...state,
          idResult: true,
          idValidation: true,
        });
      }
      else {
        setState({
          ...state,
          idResult: false,
          idValidation: true,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handlePwCheck = async () => {
    const url = `http://localhost:8080/user/pw`
    const params = {
      userId: state.userId,
      userPw: state.userPw,
    }
    try {
      const res = await axios.post(url, params);
      console.log(res);
      if (res.data.pwResult) {
        const jwtToken = res.data.jwtToken;
        console.log("1" + jwtToken);
        setCookie('accessJwtToken', jwtToken);
        // localStorage.setItem('userInfo', jwtToken);
        setState({
          ...state,
          pwResult: true,
          pwValidation: true,
        });
      }
      else {
        setState({
          ...state,
          pwResult: false,
          pwValidation: true,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const Timer = () => {
    useEffect(() => {
      timerId.current = setInterval(() => {
        setgauge(parseInt(time.current));
        time.current += 25;
      }, 400);
      return () => clearInterval(timerId.current);
    }, []);

    useEffect(() => {
      if (time.current >= 95) {
        setgauge(95);
        clearInterval(timerId.current);
        router.push("/");
        console.log("timeout")
      }
    }, []);

    return (
      <GaugeBar disabled={true} isGauge={gauge} />
    );
  };

  return (
    <Container>
      <Title title="login" />
      <LoginBox>
        <MenubarBox>
          &nbsp;&nbsp;
          <ButtonBox>
            <MenuButton btnColor={"red"} />
            <MenuButton btnColor={"orange"} />
            <MenuButton btnColor={"green"} />
          </ButtonBox>
        </MenubarBox>
        <InputBox>
          {!state.quarter && (
            <React.Fragment>
              <HeaderShellBox>
                Welcome to SMASH!!&nbsp;&nbsp;{nowDate}&nbsp;on console
              </HeaderShellBox>
              <LogoBox>
                __/\\\\\\\\\\\\\____/\\\\____________/\\\\__________/\\\____________/\\\\\\\\\\\\\____/\\\_________/\\\
                _/\\\///////////\\\_\/\\\\\\________/\\\\\\________/\\\/\\\________/\\\///////////\\\_\/\\\_________\/\\\
                _\/\\\_________\///__\/\\\//\\\____/\\\//\\\_______\/\\\/\\\_______\/\\\_________\///__\/\\\________\/\\\
                __\/\\\_______________\/\\\\///\\\/\\\/_\/\\\______/\\\/\///\\\_____\/\\\_______________\/\\\________\/\\\
                ___\///\\\\\\\\\\\\\___\/\\\__\///\\\/___\/\\\_____\/\\\___\/\\\____ \///\\\\\\\\\\\\\_____\/\\\\\\\\\\\\\\\\\
                ______\/////////////\\\_\/\\\____\///_____\/\\\____/\\\\\\\\\\\\\\\_____\/////////////\\\___\/\\\//////////\\\
                ___________________\/\\\_\/\\\_____________\/\\\___\/\\\/////////\\\_________________\/\\\_\/\\\________\/\\\
                _______/\\\_________\/\\\_\/\\\_____________\/\\\__/\\\/________\///\\\___/\\\________\/\\\_\/\\\________\/\\\
                _______\///\\\\\\\\\\\\\/__\/\\\_____________\/\\\_\/\\\___________\/\\\__\///\\\\\\\\\\\\\/___\/\\\________\/\\\
                __________\/////////////____\///______________\///__\///____________\///_____\/////////////___\////________\////
              </LogoBox>
              <br />
              <QuarterBox>
                <QuarterButton onClick={handleOnLogin}><QuarterText>로그인</QuarterText></QuarterButton>
                <QuarterButton><QuarterText>회원가입</QuarterText></QuarterButton>
                <QuarterButton><QuarterText>기타</QuarterText></QuarterButton>
              </QuarterBox>
            </React.Fragment>
          )}
          {state.login && (
            <React.Fragment>
              <ShellBox>
                <ShellTextBox textColor={"green"}>login-checking id</ShellTextBox>&nbsp;&nbsp;
                <ShellTextBox textColor={"yellow"}>~/www/domain/com</ShellTextBox>&nbsp;&nbsp;
                <ShellTextBox textColor={"mint"}>(main)</ShellTextBox>
              </ShellBox>
              <ShellBox>
                $&nbsp;&nbsp;
                <Input
                  type="text"
                  value={state.userId}
                  name="userId"
                  onChange={handleInputChange}
                  onKeyPress={(e) => { handleEnterPress("id", e) }}
                  disabled={state.idResult}
                  ref={inputFocus}
                  maxLength={10}
                />
              </ShellBox>
              {state.idValidation && (
                <ShellBox>
                  {state.idResult ? `hellow ${state.userId}!` : `command not found: txt`}
                </ShellBox>
              )}
              {state.idResult && (
                <ShellBox>
                  <ShellTextBox textColor={"green"}>login-checking password</ShellTextBox>&nbsp;&nbsp;
                  <ShellTextBox textColor={"yellow"}>~/www/domain/com</ShellTextBox>&nbsp;&nbsp;
                  <ShellTextBox textColor={"mint"}>(main)</ShellTextBox>
                </ShellBox>
              )}
              {state.idResult && (
                <ShellBox>
                  $&nbsp;&nbsp;
                  <Input
                    type="password"
                    value={state.userPw}
                    name="userPw"
                    onChange={handleInputChange}
                    onKeyPress={(e) => { handleEnterPress("pw", e) }}
                    disabled={state.pwResult}
                    textColor={"black"}
                    ref={inputFocus}
                  />
                </ShellBox>
              )}
              {state.pwValidation && (
                <ShellBox>
                  {state.pwResult ? `` : `command not found: txt`}
                </ShellBox>
              )}
              <br />
              {state.idResult && state.pwResult && (
                <ShellBox>
                  Project logo position
                </ShellBox>
              )}
              <br />
              {state.idResult && state.pwResult && (
                <ShellBox>
                  0 updates can be applied immediately
                </ShellBox>
              )}
              <br />
              {state.idResult && state.pwResult && (
                <ShellBox>
                  system load. . .
                </ShellBox>
              )}
              {state.idResult && state.pwResult && (
                <ShellBox>
                  <Timer />
                </ShellBox>
              )}
            </React.Fragment>)}
        </InputBox>
      </LoginBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginBox = styled.div`
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
  /* border-right: solid 1px black; */
`

const MenuButton = styled.button`
  width: 14px;
  height: 14px;
  display: flex;
  border: solid 1px black;
  border-radius: 50%;
  background: ${(props => (props.btnColor === "red" ? "#F78181" : props.btnColor === "orange" ? "#F7BE81" : "#01DF01"))};
`

const InputBox = styled.div`
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
  /* align-items: center; */
  font-size: 20px;
  color: white;
`

const ShellBox = styled.div`
  width: 98.5%;
  /* height: 8%; */
  display: flex;
  /* align-items: center; */
  font-size: 20px;
  color: white;
`

const LogoBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  font-size: 18px;
  color: white;
`

const QuarterBox = styled.div`
  width: 100%;
  height: 30%;
  display: grid;
  align-items: center;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
`

const QuarterButton = styled.div`
  width: 40%;
  height: 30%;
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
  font-size: 13px;
  color: #82FA58;
`

const ShellTextBox = styled.div`
  font-size: 20px;
  color: ${(props => (props.textColor === "green" ? "#82FA58" : props.textColor === "yellow" ? "#D7DF01" : "#00FFBF"))};
`

const Input = styled.input`
  /* color: ${(props => (props.textColor === "black" ? "black" : "white"))}; */
  color: white;
  background: black;
  font-size: 20px;
  border: none;
  width: 100%;

  &:focus{
    outline: none;
  }
`

const GaugeBar = styled.input`
  width: ${(props => (props.isGauge > "0" ? props.isGauge + "%" : "0%"))};
  height: 100%;
  background: #D8D8D8;
  border-radius: 9px 9px 9px 9px;
`