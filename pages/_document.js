import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='mx-7 md:w-[1040px] md:mx-auto'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
