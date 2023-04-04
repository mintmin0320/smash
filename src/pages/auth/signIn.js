import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router';
import { useAuthDispatch } from '../../context/auth';
import axios from 'axios'
import styled from 'styled-components'
import Title from '../../component/util/Title'
import MenuBar from '../../component/util/MenuBar'

export default function SignIn() {
  let router = useRouter();
  const dispatch = useAuthDispatch();
  const time = useRef(0);
  const timerId = useRef(null);
  const inputFocus = useRef(null);
  const [gauge, setgauge] = useState(0);
  const [state, setState] = useState({
    userId: '',
    userPw: '',
    idResult: false,
    pwResult: false,
    idValidation: false,
    pwValidation: false,
  })

  useEffect(() => {
    inputFocus.current.focus();
  }, [state.idResult]);

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleInputBack = (e) => {
    router.push("/auth");

  };

  const handleEnterPress = (params, e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      console.log(state.userId)
      if (state.userId === '/') {
        handleInputBack();
      }
      else if (params === 'id') {
        handleIdCheck();
        // if (e.target.value === 'hamin') {
        //   setState({
        //     ...state,
        //     idResult: true,
        //     idValidation: true,
        //   });
        // }
        // else {
        //   setState({
        //     ...state,
        //     idResult: false,
        //     idValidation: true,
        //   });
        // }
      }
      else if (params === 'pw') {
        handlePwCheck();
        // if (e.target.value === '1234') {
        //   setState({
        //     ...state,
        //     pwResult: true,
        //     pwValidation: true,
        //   });
        // }
        // else {
        //   setState({
        //     ...state,
        //     pwResult: false,
        //     pwValidation: true,
        //   });
        // }
      }
    }
  };

  const handleIdCheck = async () => {
    const url = `/auth/id`
    const params = {
      userId: state.userId,
    }
    try {
      const res = await axios.post(url, params);
      console.log(res);
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
    const url = `/auth/password`
    const params = {
      userId: state.userId,
      userPw: state.userPw,
    }
    try {
      const res = await axios.post(url, params);
      console.log(res);
      if (res.data.pwResult) {
        setState({
          ...state,
          pwResult: true,
          pwValidation: true,
        });
        // dispatch('LOGIN', res.data?.user.userId);
        localStorage.setItem('userId', res.data.user.userId);
        dispatch('LOGIN', res.data.user.userId);
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
        router.push('/', undefined, { shallow: true })
        console.log("timeout");
      }
    }, []);

    return (
      <GaugeBar disabled={true} isGauge={gauge} />
    );
  };

  return (
    <Container>
      <Title title="signIn" />
      <Wrap>
        <MenuBar />
        <Content>
          <ShellBox>
            <ShellTextBox textColor={"green"}>login-checking id</ShellTextBox>&nbsp;&nbsp;
            <ShellTextBox textColor={"yellow"}>~/www/smash/com</ShellTextBox>&nbsp;&nbsp;
            <ShellTextBox textColor={"mint"}>(signIn)</ShellTextBox>
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
              maxLength={10}
              ref={inputFocus}
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
              <ShellTextBox textColor={"yellow"}>~/www/smash/com</ShellTextBox>&nbsp;&nbsp;
              <ShellTextBox textColor={"mint"}>(signIn)</ShellTextBox>
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
            <React.Fragment>
              <ShellBox>
                Project logo position
              </ShellBox>
              <br />
              <ShellBox>
                0 updates can be applied immediately
              </ShellBox>
              <br />
              <ShellBox>
                system load. . .
              </ShellBox>
              <ShellBox>
                <Timer />
              </ShellBox>
            </React.Fragment>
          )}
        </Content>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E0F2F7;
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

  @media ( max-width: 1500px ) {
    width: 60%;
  }
`

const Content = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 1px black;
`

const ShellBox = styled.div`
  width: 98.5%;
  display: flex;
  font-size: 20px;
  color: white;
`

const ShellTextBox = styled.div`
  font-size: 20px;
  color: ${(props => (props.textColor === "green" ? "#82FA58" : props.textColor === "yellow" ? "#D7DF01" : "#00FFBF"))};
`

const Input = styled.input`
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