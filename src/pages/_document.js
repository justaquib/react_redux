import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href={process.env.NEXT_PUBLIC_APP_LOGO} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
