import { GetStaticProps } from "next";
import Head from "next/head";
import { FC, Fragment } from "react";
import FaqBlock from "../components/faqBlock/FaqBlock";
import SideBarList from "../components/sideBarList/SideBarList";
import s from "./faqPage.module.scss";

type FaqTypes = {
  title: string;
};

const Faq: FC<FaqTypes> = ({ title }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <div className={s.container}>
          <FaqBlock />
          <SideBarList
            variants={["areCasinos", "areBonuses", "areSlotGames"]}
          />
        </div>
      </main>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: "Faq page",
    },

    revalidate: 3600,
  };
};

export default Faq;
