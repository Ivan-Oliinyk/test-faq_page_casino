import React from "react";
import s from "../../../styles/modules/sideBar/areBonuses/areBonuses.module.scss";
import { BonusCardType } from "../../../types/topBonusesType";
import Heading from "../../heading/Heading";
import BonusCard from "./bonusCard/BonusCard";

const mockData: BonusCardType[] = [
  {
    id: 1,
    imageSrc: "/images/top-casino/ozwin.png",
    freeSpins: 100,
    percentUp: "400%",
    bonus: 4000,
    isExclusive: true,
  },
  {
    id: 2,
    imageSrc: "/images/top-casino/fairGo.png",
    freeSpins: 100,
    percentUp: "400%",
    bonus: 4000,
    isExclusive: true,
  },
  {
    id: 3,
    imageSrc: "/images/top-casino/hellspin.png",
    freeSpins: 100,
    percentUp: "400%",
    bonus: 4000,
    isExclusive: false,
  },
  {
    id: 4,
    imageSrc: "/images/top-casino/uptown.png",
    freeSpins: 100,
    percentUp: "400%",
    bonus: 4000,
    isExclusive: true,
  },
  {
    id: 5,
    imageSrc: "/images/top-casino/ignition.png",
    freeSpins: 100,
    percentUp: "400%",
    bonus: 4000,
    isExclusive: false,
  },
  {
    id: 6,
    imageSrc: "/images/top-casino/lucky.png",
    freeSpins: 100,
    percentUp: "400%",
    bonus: 4000,
    isExclusive: false,
  },
  {
    id: 7,
    imageSrc: "/images/top-casino/bizzo.png",
    freeSpins: 100,
    percentUp: "400%",
    bonus: 4000,
    isExclusive: true,
  },
];

const AreBonuses = () => {
  return (
    <div className={s.wrapper}>
      <Heading tag="h2" text={"Top Bonuses"} />
      <div>
        {mockData.map((item) => (
          <BonusCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default AreBonuses;
