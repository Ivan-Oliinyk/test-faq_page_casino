import React from "react";
import AreCasinos from "./areCasinos/AreCasinos";
import s from "../../styles/modules/areCasinos/areCasinos.module.scss";

const SideBarList = () => {
  return (
    <div className={s.wrapper}>
      <AreCasinos />
    </div>
  );
};

export default SideBarList;
