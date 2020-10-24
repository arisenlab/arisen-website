import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import theme from "../components/theme";

import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/header"));
const Footer = dynamic(() => import("../components/footer"));
const SocialMedia = dynamic(() => import("../components/social-media"));

Router.onRouteChangeStart = () => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => {
    NProgress.done();
};

Router.onRouteChangeError = () => {
    NProgress.done();
};

export default function ArisenFrontend(props) {
    const { Component, pageProps } = props;

    const router = useRouter();

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }

        router.events.on("routeChangeComplete", () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        });
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
                <Header />
                <Component {...pageProps} />
                <SocialMedia />
                <Footer />
            </ThemeProvider>
        </React.Fragment>
    );
}

ArisenFrontend.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};
