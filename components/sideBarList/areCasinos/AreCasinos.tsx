import { GetStaticProps } from "next";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { fetchTopCasino } from "../../../store/reducers/ActionCreator";
import Heading from "../../heading/Heading";
import CasinoCard from "./casinoCard/CasinoCard";

const AreCasinos = ({}) => {
  const { topCasinos, error, isLoading } = useAppSelector(
    (state) => state.topCasinoReducer
  );

  console.log("topCasinos ===> ", topCasinos);

  //use in production! Uncomment and add you endpoint in ./store/reducers/ActionCreator.ts
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchTopCasino());
  // }, []);

  return (
    <div>
      <Heading tag="h2" text={"Top Casinos"} />
      <div>
        {isLoading && <p>Loading ...</p>}
        {error && <p>Error !</p>}
        {topCasinos.length &&
          topCasinos.map((item) => <CasinoCard key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export default AreCasinos;
