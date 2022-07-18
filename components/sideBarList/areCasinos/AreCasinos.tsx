import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { fetchTopCasino } from "../../../store/reducers/ActionCreator";
import Heading from "../../heading/Heading";
import CasinoCard from "./casinoCard/CasinoCard";

const AreCasinos = () => {
  //use in production !
  // const dispatch = useAppDispatch();
  const { topCasinos, error, isLoading } = useAppSelector(
    (state) => state.topCasinoReducer
  );

  //use in production !
  // useEffect(() => {
  //   dispatch(fetchTopCasino())
  // }, [])

  return (
    <div>
      <Heading tag="h2" text={"Top Casinos"} />
      <div>
        {isLoading && <p>Loading ...</p>}
        {error.length && <p>Error !</p>}
        {topCasinos.map((item) => (
          <CasinoCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default AreCasinos;
