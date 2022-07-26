import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Heading from "../components/heading/Heading";

const Home: NextPage = () => {
  return (
    <Link href="/faq">
      <a>
        <Heading tag={"h1"} text="Go to Faq Page" />
      </a>
    </Link>
  );
};

export default Home;
