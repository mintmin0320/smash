import '../styles/globals.css'
import Axios from 'axios';
import Head from 'next/head'
import Script from 'next/script';
import { AuthProvider } from '../context/auth';

export default function MyApp({ Component, pageProps }) {
  Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL + "/api";
  Axios.defaults.withCredentials = true;
  return (
    <AuthProvider>

      <Head>
        <meta charSet="utf-8" />
        <title>Next Naver maps</title>
      </Head>


      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
      ></Script>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
