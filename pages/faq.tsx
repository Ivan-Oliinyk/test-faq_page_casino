import { GetStaticProps } from "next";
import { FC } from "react";
import FaqBlock from "../components/faqBlock/FaqBlock";
import { ISideBarListProps } from "../components/sideBarList/SideBarList";

type FaqTypes = {
  title: string;
  sideBarList: ISideBarListProps;
};

const Faq: FC<FaqTypes> = () => {
  return <FaqBlock />;
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: "Faq page",
      SideBarList: ["areCasinos", "areBonuses", "areSlotGames"],
    },

    revalidate: 3600,
  };
};

export default Faq;
