import FaqBlock from "../components/faqBlock/FaqBlock";
import SideBarList from "../components/sideBarList/SideBarList";
import s from "../styles/modules/pages/faq-page.module.scss";

const Faq = () => {
  return (
    <div className={s.container}>
      <FaqBlock />
      <SideBarList />
    </div>
  );
};

export default Faq;
