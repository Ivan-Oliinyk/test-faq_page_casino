import React from "react";
import AreCasinos from "./areCasinos/AreCasinos";
import s from "../../styles/modules/sideBar/sideBar.module.scss";
import AreBonuses from "./areBonuses/AreBonuses";

const SideBarList = () => {
  return (
    <div className={s.wrapper}>
      <AreCasinos />
      <AreBonuses />
    </div>
  );
};

export default SideBarList;
