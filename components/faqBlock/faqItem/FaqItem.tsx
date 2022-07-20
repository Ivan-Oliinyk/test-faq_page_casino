import { FC, useState } from "react";
import { FaqItemType, IsLongType } from "../../../types/faqBlockType";
import { toCutString } from "../../../utils/toCutString";
import Heading from "../../heading/Heading";
import s from "./faqItem.module.scss";

const FaqItem: FC<FaqItemType> = ({ title, description }) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const isLongString: IsLongType = (str = description, strLength = 170) =>
    str.length > strLength;

  return (
    <div
      className={
        showMore ? `${s.wrapper + " " + s["show-content"]}` : s.wrapper
      }
    >
      <div className={s["header-wrapper"]}>
        <svg className={s["header-icon"]}>
          <use href="/sprite.svg#icon-Frame"></use>
        </svg>
        <Heading text={title} tag="h3" />
      </div>

      {/* <p className={!showMore ? s.hide : s.show}>
        {!showMore ? toCutString(description) : description}
      </p> */}
      <div
        className={
          !showMore
            ? `${s.description + " " + s.hide}`
            : `${s.description + " " + s.show}`
        }
        dangerouslySetInnerHTML={{ __html: description }}
      >
        {/* {!showMore ? toCutString(description) : description} */}
      </div>
      {isLongString(description) && (
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
      )}
    </div>
  );
};

export default FaqItem;
