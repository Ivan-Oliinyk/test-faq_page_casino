import React, { FC } from "react";
import { HeadingType } from "../../types/headingType";
import s from "./heading.module.scss";

const Heading: FC<HeadingType> = ({ text, tag }) => {
  const Tag = tag || "h1";

  return <Tag className={s.title}>{text}</Tag>;
};

export default Heading;
