import { FC, useState } from "react";
import Heading from "../../heading/Heading";
import s from "../../../styles/modules/faq/faq-item.module.scss";

type FaqItemType = { title: string; description: string };

const FaqItem: FC<FaqItemType> = ({ title, description }) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className={s.wrapper}>
      <div className={s.header__wrapper}>
        <svg className={s.header__icon}>
          <use href="/sprite.svg#icon-Frame"></use>
        </svg>
        <Heading text={title} tag="h3" />
      </div>
      <p className={!showMore ? s.hide__more : ""}>{description}</p>
      <button type="button" onClick={() => setShowMore(!showMore)}>
        {showMore ? (
          <svg className={s.btn__icon}>
            <use href="/sprite.svg#icon-plus"></use>
          </svg>
        ) : (
          <svg className={s.btn__icon}>
            <use href="/sprite.svg#icon-minus"></use>
          </svg>
        )}
      </button>
    </div>
  );
};

export default FaqItem;
