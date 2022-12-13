// pages/_document.js

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import Script from 'next/script';
import { theme } from 'styles/theme';

class Document extends NextDocument {
  static getInitialProps(ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100&family=Montserrat:wght@100&display=swap"
            rel="stylesheet"
          /> */}
          <script src="https://app.embed.im/snow.js" defer />
        </Head>

        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
