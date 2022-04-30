import "../styles/globals.css";
import "../styles/reset.css";
import { theme } from "../theme/theme";
import { GlobalStyles } from "../theme/globalStyles";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />


import withApollo from "../hoc/withapplo";

import { useEffect } from "react";

import Router from "next/router";

function MyApp({ Component, pageProps }) {
  return (
    <>

      <Head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dwjlja8hw/image/upload/v1647601057/PULSEPLAY-LOGO_1_c2m0ht.png"
          type="image/x-icon"
        />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>


      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default withApollo(MyApp);
