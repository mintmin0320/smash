import '../styles/globals.css'
import Axios from 'axios';
import { AuthProvider } from '../context/auth';

export default function MyApp({ Component, pageProps }) {
  Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL + "/api";
  Axios.defaults.withCredentials = true;
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
