import React, { FC } from "react";
import s from "./ratingCard.module.scss";
import Image from "next/image";
import Heading from "@/components/heading/Heading";
import { ITopGamesType } from "@/types/ITopGamesType";

const CustomCard: FC<{ data: ITopGamesType }> = ({ data }) => {
  return (
    <div className={s.card}>
      <Image src={data.imageSrc} width={80} height={60} alt={data.title} />
      <div className={s.content}>
        <div className={s["header-wrapper"]}>
          <Heading tag={"h3"} text={data.title}></Heading>
          {data.author && <span>{data.author}</span>}
        </div>
        <div className={s["info-wrapper"]}>
          <div className={s.info}>
            <div className={s.rating}>
              <svg>
                <use href="/sprite.svg#icon-rating"></use>
              </svg>
            </div>
            <div className={s["info-descr"]}>
              <div>{data.rating}</div>
              <div>User Rating</div>
            </div>
          </div>

          <div className={s.info}>
            <div className={s.rating}>
              <svg>
                <use href="/sprite.svg#icon-payout"></use>
              </svg>
            </div>
            <div className={s["info-descr"]}>
              <div>{data.payout}</div>
              <div>% RTP</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
