import { Animation } from '../component/util/Lottie'
import styled from 'styled-components';

export default function ErrorPage() {
  return (
    <Container>
      <Animation />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-content: center;
  justify-content: center;
`