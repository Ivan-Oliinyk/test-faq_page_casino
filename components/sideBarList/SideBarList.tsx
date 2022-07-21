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
    areCasinos: (suffix: number) => <AreCasinos key={"areCasinos-" + suffix} />,
    areBonuses: (suffix: number) => <AreBonuses key={"areBonuses-" + suffix} />,
    areSlotGames: (suffix: number) => (
      <AreGames key={"areSlotGames-" + suffix} />
    ),
  };

  return (
    <div className={s.wrapper}>
      {variants.map((variant, idx) => variantsMap[variant](idx))}
    </div>
  );
};

export default SideBarList;
