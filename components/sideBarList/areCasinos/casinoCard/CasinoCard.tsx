import React, { FC } from "react";
import { ITopCasino } from "../../../../types/ITopCasino";
import s from "./casinoCard.module.scss";
import Image from "next/image";
import Heading from "../../../heading/Heading";

type CasinoCardType = { data: ITopCasino };

const CasinoCard: FC<CasinoCardType> = ({ data }) => {
  return (
    <div className={s.card}>
      <Image src={data.imageSrc} width={80} height={60} alt={data.title} />

      <div className={s.content}>
        <Heading tag={"h3"} text={data.title}></Heading>
        <div className={s["info-wrapper"]}>
          <div className={s.info}>
            <div className={s.rating}>
              <svg>
                <use href="/sprite.svg#icon-rating"></use>
              </svg>
            </div>
            <div className={s["info-descr"]}>
              <div>{data.casinoRating}</div>
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
              <div>Payout %</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasinoCard;
