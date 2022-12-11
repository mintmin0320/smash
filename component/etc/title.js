import Head from 'next/head' //next.js에서 지원하는 컴포넌트

export default function Title({ title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
    </div>
  )
}