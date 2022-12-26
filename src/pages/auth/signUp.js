import axios from 'axios'
import styled from 'styled-components'
import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router';
import Title from '../../component/util/Title'
import Link from 'next/link';

export default function SignUp() {
  let router = useRouter();
  const inputFocus = useRef(null);
  const [state, setState] = useState({
    userId: '',
    userPw: '',
    result: false,
  })

  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  const handleInputChange = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  }

  const handleSignUp = async () => {
    const url = `/auth/signUp`
    const params = {
      userId: state.userId,
      userPw: state.userPw,
    }
    try {
      const res = await axios.post(url, params);
      console.log(res);
      console.log("hi");
      if (res.data.result) {
        console.log("1");
        setState({
          ...state,
          result: true,
        });

        // setTimeout(() => {
        router.push("/auth");
        // }, 700);
      }
      else {
        console.log("2");
        setState({
          ...state,
          result: false,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Title title="signUp" />
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
          <Form onSubmit={handleSubmit}>
            <ShellBox>
              <ShellTextBox textColor={"green"}>Please enter the information</ShellTextBox>&nbsp;&nbsp;
              <ShellTextBox textColor={"yellow"}>~/www/smash/com</ShellTextBox>&nbsp;&nbsp;
              <ShellTextBox textColor={"mint"}>(signUp)</ShellTextBox>
            </ShellBox>
            <Input
              type="text"
              value={state.userId}
              name="userId"
              onChange={handleInputChange}
              maxLength={10}
              required={true}
              placeholder="Enter your ID. "
              ref={inputFocus}
            />
            <br />
            <br />
            <Input
              type="password"
              value={state.userPw}
              name="userPw"
              onChange={handleInputChange}
              placeholder="Enter your password. "
              required={true}
            />
            <br />
            <br />
            <SignUpBox>
              <QuarterButton>
                <QuarterText>Sign Up</QuarterText>
              </QuarterButton>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link href="/auth" legacyBehavior>
                <QuarterButton>
                  <QuarterText>Back</QuarterText>
                </QuarterButton>
              </Link>
            </SignUpBox>
          </Form>
        </InputBox>
      </LoginBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F8EFFB;
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

const Form = styled.form`
  width: 98.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
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

const InputBox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 1px black;
`

const ShellBox = styled.div`
  width: 98.5%;
  height: 10%;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: white;
`

const SignUpBox = styled.div`
  width: 98.5%;
  /* height: 8%; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
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
  font-size: 18px;
  border: none;
  width: 100%;
  height: 10%;
  border: dashed 1px #F2F2F2;

  &:focus{
    outline: none;
  }

  /* &::placeholder{
    font-size: 18px;
    color: #82FA58;
  } */
`
const QuarterButton = styled.button`
  width: 25%;
  height: 50px;
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
  font-size: 16px;
  color: #82FA58;
`