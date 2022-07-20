import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import Heading from "../../heading/Heading";
import BonusCard from "./bonusCard/BonusCard";
import { fetchTopBonuses } from "../../../store/reducers/topBonuseReducer/TopBonusesActionCreator";

const AreBonuses = () => {
  const { topBonuses, error, isLoading } = useAppSelector(
    (state) => state.topBonusesReducer
  );

  //use with your data! Uncomment and add you endpoint in ./store/reducers/topBonuseReducer/TopBonusesActionCreator.ts
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchTopBonuses());
  // }, []);

  return (
    <div>
      <Heading tag="h2" text={"Top Bonuses"} />
      <div>
        {topBonuses.map((item) => (
          <BonusCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default AreBonuses;
