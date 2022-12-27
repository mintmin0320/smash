import styled from 'styled-components';
import Mypage from '../mypage/mypage';
import Community from '../community/Community';

export default function Modal(props) {
  const { open, close, header } = props;
  return (
    <Container>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <SectionBox>
            <MenubarBox>
              <ButtonBox>
                <MenuButton btnColor={"red"} onClick={close} />
                <MenuButton btnColor={"orange"} />
                <MenuButton btnColor={"green"} />
              </ButtonBox>
              <NameBox>
                {header}
              </NameBox>
            </MenubarBox>
            <Main>
              {header === "내정보" && (
                <MypageBox>
                  <Mypage />
                </MypageBox>
              )}
              {header === "커뮤니티" && (
                <MypageBox>
                  <Community />
                </MypageBox>
              )}
            </Main>
          </SectionBox>
        ) : null}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .modal.openModal {
    display: flex;
    align-items: center; 
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show 0.3s;
  }
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }  
`

const SectionBox = styled.div`
  width: 90%;
  max-width: 1650px;
  height: 850px;
  background-color: #fff; 
  overflow: hidden;
  margin: 0 auto;
  border-radius: 11px 11px 11px 11px;
  //팝업이 열릴때 스르륵 열리는 효과
  animation: modal-show 0.3s;
`

const MenubarBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  border-radius: 11px 11px 0px 0px;
  background: #585858;
  background-color: #E6E6E6;
`

const ButtonBox = styled.div`
  width: 4%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const NameBox = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MenuButton = styled.button`
  width: 14px;
  height: 14px;
  display: flex;
  cursor: pointer;
  border: solid 1px ${(props => (props.btnColor === "red" ? "#F78181" : props.btnColor === "orange" ? "#F7BE81" : "#01DF01"))};;
  border-radius: 50%;
  background: ${(props => (props.btnColor === "red" ? "#F78181" : props.btnColor === "orange" ? "#F7BE81" : "#01DF01"))};
`

const Main = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: solid 0;
`

const MypageBox = styled.button`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-left: solid 3px #F5F5F5;
  border-right: solid 3px #F5F5F5;
  border-top: solid 0;
  padding: 0;
`
