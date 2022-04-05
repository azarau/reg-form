import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

try {
  firebase.initializeApp({
    apiKey: "AIzaSyBUfHsP0thPtdGFTiXYGGPGPTPODUcp_yA",
    authDomain: "azara-u.firebaseapp.com",
    databaseURL: "https://azara-u.firebaseio.com",
    projectId: "azara-u",
    storageBucket: "azara-u.appspot.com",
    messagingSenderId: "96706318508",
    appId: "1:96706318508:web:c8cc1f8370dbd079030f09",
    measurementId: "G-ZVJFZXPBZB"
  });

  firebase
    .firestore()
    .enablePersistence()

    .catch((err) => {
      if (err.code == "failed-precondition") {
        // only be enabled in one tab at a a time (multiple tabs open)
      } else if (err.code == "unimplemented") {
        // browser does not support all of the features required to enable persistence
      }
    });
} catch (error) {
  // console.log(error);
}

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component firebase={firebase} {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};
