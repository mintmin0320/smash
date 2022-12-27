import styled from 'styled-components';

export default function MenuBar() {
  return (
    <MenubarBox>
      &nbsp;&nbsp;
      <ButtonBox>
        <MenuButton btnColor={"red"} />
        <MenuButton btnColor={"orange"} />
        <MenuButton btnColor={"green"} />
      </ButtonBox>
    </MenubarBox>
  );
};

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