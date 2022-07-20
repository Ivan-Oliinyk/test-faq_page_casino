import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Heading from "../components/heading/Heading";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Link href="/faq">
          <a>
            <Heading tag={"h1"} text="Go to Faq Page" />
          </a>
        </Link>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
