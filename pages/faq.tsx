import { GetStaticProps } from "next";
import FaqBlock from "../components/faqBlock/FaqBlock";

const Faq = () => {
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
