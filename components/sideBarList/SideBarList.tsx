import React from "react";
import AreCasinos from "./areCasinos/AreCasinos";
import s from "./sideBar.module.scss";
import AreBonuses from "./areBonuses/AreBonuses";
import AreGames from "./areGames/AreGames";

const SideBarList = () => {
  return (
    <div className={s.wrapper}>
      <AreCasinos />
      <AreBonuses />
      <AreGames />
    </div>
  );
};

export default SideBarList;
