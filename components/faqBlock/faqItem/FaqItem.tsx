import { FC, useState } from "react";
import { FaqItemType, IsLongType } from "@/types/faqBlockType";
import Heading from "../../heading/Heading";
import s from "./faqItem.module.scss";
import "./faqItem.module.scss";

const FaqItem: FC<FaqItemType> = ({ id, title, description }) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const isLongString: IsLongType = (str = description, strLength = 170) =>
    str.length > strLength;

  return (
    // <div
    //   className={
    //     showMore ? `${s.wrapper + " " + s["show-content"]}` : s.wrapper
    //   }
    // >
    //   <div className={s["header-wrapper"]}>
    //     <svg className={s["header-icon"]}>
    //       <use href="/sprite.svg#icon-Frame"></use>
    //     </svg>
    //     <Heading text={title} tag="h3" />
    //   </div>

    //   <div
    //     className={
    //       !showMore
    //         ? `${s.description + " " + s.hide}`
    //         : `${s.description + " " + s.show}`
    //     }
    //     dangerouslySetInnerHTML={{ __html: description }}
    //   ></div>
    //   {isLongString(description) && (
    //     <button type="button" onClick={() => setShowMore(!showMore)}>
    //       {showMore ? (
    //         <svg className={s["btn-icon"]}>
    //           <use href="/sprite.svg#icon-plus"></use>
    //         </svg>
    //       ) : (
    //         <svg className={s["btn-icon"]}>
    //           <use href="/sprite.svg#icon-minus"></use>
    //         </svg>
    //       )}
    //     </button>
    //   )}
    // </div>
    <div className={`${s.wrapper}`}>
      <div className={s["header-wrapper"]}>
        <svg className={s["header-icon"]}>
          <use href="/sprite.svg#icon-Frame"></use>
        </svg>
        <Heading text={title} tag="h3" />
      </div>
      <div className="custom-collapse">
        <div
          className={`${s.description} collapse`}
          dangerouslySetInnerHTML={{ __html: description }}
          id={`collapseExample${id}`}
        ></div>
      </div>
      {isLongString(description) && (
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapseExample${id}`}
          aria-expanded="false"
          aria-controls={`collapseExample${id}`}
          onClick={() => setShowMore(!showMore)}
        >
          <svg className={s["btn-icon"]}>
            {showMore ? (
              <use href="/sprite.svg#icon-plus" />
            ) : (
              <use href="/sprite.svg#icon-minus" />
            )}
          </svg>
        </button>
      )}
    </div>
  );
};

export default FaqItem;
