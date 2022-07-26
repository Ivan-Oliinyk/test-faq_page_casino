import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import Heading from "@/components/heading/Heading";
import { fetchTopGames } from "@/reducers/topGamesReducer/TopGamesActionCreator";
import CustomCard from "../customCard/CustomCard";

const AreGames = ({}) => {
  const { topGames, error, isLoading } = useAppSelector(
    (state) => state.topGamesReducer
  );

  //use with your data! Uncomment and add you endpoint in ./store/reducers/topGamesReducer/TopGamesActionCreator
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchTopGames());
  // }, []);

  return (
    <div>
      <Heading tag="h2" text={"Top Slot Games"} />
      <div>
        {isLoading && <p>Loading data...</p>}
        {error && <p>Error with loading data!</p>}
        {topGames.length &&
          topGames.map((item) => <CustomCard key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export default AreGames;
