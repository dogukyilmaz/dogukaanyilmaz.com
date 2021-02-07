import type { AppProps /*, AppContext */ } from "next/app";
import { ChakraProvider, cookieStorageManager, localStorageManager } from "@chakra-ui/react";

import { theme } from "styles/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps, cookies }: AppProps | any) {
  return (
    <ChakraProvider
      theme={theme}
      colorModeManager={typeof cookies === "string" ? cookieStorageManager(cookies) : localStorageManager}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

// MyApp.getInitialProps = ({ req }: any) => {
//   return {
//     // first time users will not have any cookies and you may not return
//     // undefined here, hence ?? is necessary
//     cookies: req?.headers.cookie ?? "",
//   };
// };

export default MyApp;
