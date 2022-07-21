import Image from "next/image";
import Heading from "@/components/heading/Heading";
import s from "./faqHeader.module.scss";
import { FC } from "react";
import { FaqHeaderType } from "@/types/faqBlockType";

const FaqHeader: FC<FaqHeaderType> = ({ title, description }) => {
  return (
    <div className={s.wrapper}>
      <Heading text={title} />
      <div className={s.content}>
        <div className={s["img-wrapper"]}>
          <Image src="/images/faq/faq.png" alt="faq" width={200} height={140} />
        </div>
        <div className={s.descr}>{description}</div>
      </div>
    </div>
  );
};

export default FaqHeader;
