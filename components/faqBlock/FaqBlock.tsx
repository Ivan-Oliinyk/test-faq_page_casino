import React, { FC } from "react";
import FaqHeader from "./faqHeader/FaqHeader";
import FaqItem from "./faqItem/FaqItem";
import Heading from "../heading/Heading";
import s from "../../styles/modules/faq/faq-block.module.scss";

type FaqBlockType = {
  showHeader?: boolean;
};

const dataItems = [
  {
    title: "What are lorem ipsum dolor sit amet lorem ipsum?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
];

const FaqBlock: FC<FaqBlockType> = ({ showHeader = true }) => {
  return (
    <div className={s.wrapper}>
      <div>{showHeader && <FaqHeader title={"FAQ h1"} />}</div>
      <div>
        <div>
          <Heading text={"FAQ lorem ipsum h2"} tag={"h2"} />
          <form>
            <input type="text"></input>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default FaqBlock;
