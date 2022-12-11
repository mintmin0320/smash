import { Fragment } from 'react';
import LoginPage from '../../component/auth/login';
import Title from '../../component/etc/title'

export default function Home() {
  return (
    <Fragment>
      <Title title="login" />
      <LoginPage />
    </Fragment>
  );
}

