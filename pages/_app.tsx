import "bootstrap/dist/css/bootstrap.min.css";
// import bs from "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import s from "./app.module.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { setupStore } from "../store/store";
import { Fragment, useEffect } from "react";
import Head from "next/head";
import SideBarList from "@/components/sideBarList/SideBarList";

const store = setupStore();

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap.min.js")
      : null;
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <Head>
          <title>{pageProps.title}</title>
        </Head>
        <header className={s.header}>header</header>
        <main className={`${s.main}`}>
          <div className="container">
            <div className={s.container}>
              <Component {...pageProps} />
              {pageProps.SideBarList && (
                <SideBarList variants={[...pageProps.SideBarList]} />
              )}
            </div>
          </div>
        </main>
        <footer className={s.footer}>footer</footer>
      </Fragment>
    </Provider>
  );
};

export default MyApp;
