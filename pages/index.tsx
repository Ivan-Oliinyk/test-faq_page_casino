import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Link href="/faq">Faq</Link>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
