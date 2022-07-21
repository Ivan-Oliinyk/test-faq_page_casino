import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ITopCasino } from "@/types/ITopCasino";

export const fetchTopCasino = createAsyncThunk(
  "topCasino/fetchAll",
  async (_, thunkAPI) => {
    try {
      const UrlEndpoint = ""; //write you endpoint in UrlEndpoint  for example(https://jsonplaceholder.typicode.com/users)

      const response = await axios.get<ITopCasino[]>(UrlEndpoint);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to load data");
    }
  }
);
