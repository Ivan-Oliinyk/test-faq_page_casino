import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IBonusCardType } from "../../../types/IBonusCardType";

export const fetchTopBonuses = createAsyncThunk(
  "topBonuses/fetchAll",
  async (_, thunkAPI) => {
    try {
      const UrlEndpoint = "https://jsonplaceholder.typicode.com/users"; //write you endpoint in UrlEndpoint  for example(https://jsonplaceholder.typicode.com/users)

      const response = await axios.get<IBonusCardType[]>(UrlEndpoint);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to load data");
    }
  }
);
