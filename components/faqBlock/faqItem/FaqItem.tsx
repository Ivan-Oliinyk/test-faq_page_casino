import { FC } from "react";
import Heading from "../../heading/Heading";
import s from "../../../styles/modules/faq/faq-item.module.scss";

type FaqItemType = { title: string; description: string };

const FaqItem: FC<FaqItemType> = ({ title, description }) => {
  return (
    <div className={s.wrapper}>
      <Heading text={title} tag="h3" />
      <p>{description}</p>
    </div>
  );
};

export default FaqItem;
