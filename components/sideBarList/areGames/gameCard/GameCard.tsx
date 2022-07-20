import React, { FC } from "react";
import { ITopCasino } from "../../../../types/ITopCasino";
import s from "./gameCard.module.scss";
import Image from "next/image";
import Heading from "../../../heading/Heading";
import { ITopGamesType } from "../../../../types/ITopGamesType";

const GameCard: FC<{ data: ITopGamesType }> = ({ data }) => {
  return (
    <div className={s.card}>
      <Image src={data.imageSrc} width={80} height={60} alt={data.title} />

      <div className={s.content}>
        <div className={s["header-wrapper"]}>
          <Heading tag={"h3"} text={data.title}></Heading>
          <span>{data.author}</span>
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
              <div>{data.rtp}</div>
              <div>% RTP</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
