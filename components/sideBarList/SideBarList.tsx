import React, { FC } from "react";
import AreCasinos from "./areCasinos/AreCasinos";
import s from "./sideBar.module.scss";
import AreBonuses from "./areBonuses/AreBonuses";
import AreGames from "./areGames/AreGames";

type Variants = "areCasinos" | "areBonuses" | "areSlotGames";

interface ISideBarListProps {
  variants: Variants[];
}

const SideBarList: FC<ISideBarListProps> = ({ variants }) => {
  const variantsMap = {
    areCasinos: <AreCasinos />,
    areBonuses: <AreBonuses />,
    areSlotGames: <AreGames />,
  };

  return (
    <div className={s.wrapper}>
      {variants.map((variant) => variantsMap[variant])}
    </div>
  );
};

export default SideBarList;
