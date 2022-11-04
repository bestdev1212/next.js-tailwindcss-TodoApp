import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html className=''>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap" rel="stylesheet"/>
      </Head>      
        <body className='  dark:bg-[#161622] bg-white font-josefin'>
          <Main />
          <NextScript />
        </body>
    </Html>
  )
}