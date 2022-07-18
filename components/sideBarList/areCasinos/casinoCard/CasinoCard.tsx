import React, { FC } from "react";
import { ITopCasino } from "../../../../types/ITopCasino";
import s from "../../../../styles/modules/areCasinos/casinoCard.module.scss";
import Image from "next/image";
import Heading from "../../../heading/Heading";

type CasinoCardType = { data: ITopCasino };

const CasinoCard: FC<CasinoCardType> = ({ data }) => {
  return (
    <div className={s.card}>
      <Image src={data.imageSrc} width={80} height={60} />

      <div className={s.content}>
        <Heading tag={"h3"} text={data.title}></Heading>
        <div className={s.info__wrapper}>
          <div className={s.info}>
            <div className={s.rating}>
              <svg className={s.btn__icon}>
                <use href="/sprite.svg#icon-rating"></use>
              </svg>
            </div>
            <div className={s.info__descr}>
              <div>{data.casinoRating}</div>
              <div>User Rating</div>
            </div>
          </div>

          <div className={s.info}>
            <div className={s.rating}>
              <svg className={s.btn__icon}>
                <use href="/sprite.svg#icon-payout"></use>
              </svg>
            </div>
            <div className={s.info__descr}>
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
