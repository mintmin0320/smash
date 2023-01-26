import { Fragment } from 'react';
import Title from '../../component/util/Title'
import styled from 'styled-components';
import SignOutBtn from '../../component/util/SignOutBtn'
import Wallpapers from '../../component/util/Wallpapers';

export default function Mypage() {
  const [modalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    router.push('/');
  };

  return (
    <Container>
      <Title title="mypage" />
      <Modal open={modalOpen} close={closeModal} header={"마이페이지"} />
      <Wallpapers />
      <SignOutBtn />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  background-color: #F8EFFB;;
`

