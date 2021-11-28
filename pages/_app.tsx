import React from "react";
import Head from "next/head" ;
import "/style/global.scss" ;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css"
        />
      </Head>
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
