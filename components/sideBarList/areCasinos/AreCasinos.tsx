import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { fetchTopCasino } from "@/reducers/topCasinoReducer/ActionCreator";
import Heading from "@/components/heading/Heading";
import CasinoCard from "./casinoCard/CasinoCard";

const AreCasinos = ({}) => {
  const { topCasinos, error, isLoading } = useAppSelector(
    (state) => state.topCasinoReducer
  );

  //use with your data! Uncomment and add you endpoint in ./store/reducers/topCasino/ActionCreator.ts
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchTopCasino());
  // }, []);

  return (
    <div>
      <Heading tag="h2" text={"Top Casinos"} />
      <div>
        {isLoading && <p>Loading data...</p>}
        {error && <p>Error with loading data!</p>}
        {topCasinos.length &&
          topCasinos.map((item) => <CasinoCard key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export default AreCasinos;
