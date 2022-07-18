import React, { FC } from "react";
import FaqHeader from "./faqHeader/FaqHeader";
import FaqItem from "./faqItem/FaqItem";
import Heading from "../heading/Heading";
import s from "../../styles/modules/faq/faq-block.module.scss";
import SearchForm from "../searchForm/SearchForm";

type FaqBlockType = {
  showHeader?: boolean;
};

const dataItems = [
  {
    id: 1,
    title: "What are lorem ipsum dolor sit amet lorem ipsum?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    id: 2,
    title: "What are lorem ipsum dolor sit amet lorem ipsum?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque nulla a porta malesuada. Vivamus ultricies sed justo ac vehicula. Ut dapibus sit amet nibh ac malesuada. Nam sagittis eget risus eu commodo. Nam nec tempor magna. Vivamus porta rutrum augue et molestie. Curabitur eget ullamcorper sem, rutrum imperdiet enim. Morbi bibendum mauris non venenatis vulputate. Suspendisse condimentum quam eget orci tristique, ac aliquet nibh malesuada.",
  },
  {
    id: 3,
    title: "What are lorem ipsum dolor sit amet lorem ipsum?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    id: 4,
    title: "What are lorem ipsum dolor sit amet lorem ipsum?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque nulla a porta malesuada. Vivamus ultricies sed justo ac vehicula. Ut dapibus sit amet nibh ac malesuada. Nam sagittis eget risus eu commodo. Nam nec tempor magna. Vivamus porta rutrum augue et molestie. Curabitur eget ullamcorper sem, rutrum imperdiet enim. Morbi bibendum mauris non venenatis vulputate. Suspendisse condimentum quam eget orci tristique, ac aliquet nibh malesuada.",
  },
  {
    id: 5,
    title: "What are lorem ipsum dolor sit amet lorem ipsum?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    id: 6,
    title: "What are lorem ipsum dolor sit amet lorem ipsum?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    id: 7,
    title: "What are lorem ipsum dolor sit amet lorem ipsum?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    id: 8,
    title: "What are lorem ipsum dolor sit amet lorem ipsum?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque nulla a porta malesuada. Vivamus ultricies sed justo ac vehicula. Ut dapibus sit amet nibh ac malesuada. Nam sagittis eget risus eu commodo. Nam nec tempor magna. Vivamus porta rutrum augue et molestie. Curabitur eget ullamcorper sem, rutrum imperdiet enim. Morbi bibendum mauris non venenatis vulputate. Suspendisse condimentum quam eget orci tristique, ac aliquet nibh malesuada.",
  },
  {
    id: 9,
    title: "What are lorem ipsum dolor sit amet lorem ipsum?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
];

const FaqBlock: FC<FaqBlockType> = ({ showHeader = true }) => {
  return (
    <div className={s.wrapper}>
      <div>{showHeader && <FaqHeader title={"FAQ h1"} />}</div>
      <div className={s.content}>
        <div className={s.content__header}>
          <Heading text={"FAQ lorem ipsum h2"} tag={"h2"} />
          <SearchForm text={"Search in FAQ..."} />
        </div>
        <div className={s.content__body}>
          {dataItems.map(({ id, title, description }) => (
            <FaqItem key={id} title={title} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqBlock;
