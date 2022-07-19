import { FC, useState } from "react";
import Heading from "../../heading/Heading";
import s from "./faq-item.module.scss";

type FaqItemType = { title: string; description: string };

const FaqItem: FC<FaqItemType> = ({ title, description }) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className={s.wrapper}>
      <div className={s["header-wrapper"]}>
        <svg className={s["header-icon"]}>
          <use href="/sprite.svg#icon-Frame"></use>
        </svg>
        <Heading text={title} tag="h3" />
      </div>
      <p className={!showMore ? s["hide-more"] : ""}>{description}</p>
      <button type="button" onClick={() => setShowMore(!showMore)}>
        {showMore ? (
          <svg className={s["btn-icon"]}>
            <use href="/sprite.svg#icon-plus"></use>
          </svg>
        ) : (
          <svg className={s["btn-icon"]}>
            <use href="/sprite.svg#icon-minus"></use>
          </svg>
        )}
      </button>
    </div>
  );
};

export default FaqItem;
