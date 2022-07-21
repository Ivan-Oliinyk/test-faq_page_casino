import Image from "next/image";
import React, { FC } from "react";
import s from "./bonusCard.module.scss";
import { BonusCardProps } from "../../../../types/IBonusCardType";

const BonusCard: FC<BonusCardProps> = ({ data }) => {
  return (
    <div className={s.card}>
      <Image src={data.imageSrc} alt="bonus" width={80} height={60} />
      <div className={s.card__content}>
        {data.isExclusive && (
          <span className={s.exclusive}>
            <Image
              src="/images/Exclusive.png"
              alt="exclusive"
              width={80}
              height={25}
            />
          </span>
        )}
        <div>
          <span>{data.percentUp} up to </span>
          <span>${data.bonus}</span>
        </div>
        <div>+ {data.freeSpins} Free Spins</div>
        <svg className={s.btn__icon}>
          <use href="/sprite.svg#points" width={4} height={20}></use>
        </svg>
      </div>
    </div>
  );
};

export default BonusCard;
