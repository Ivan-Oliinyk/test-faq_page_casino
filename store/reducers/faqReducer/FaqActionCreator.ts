import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DataType } from "../../../types/faqBlockType";

export const fetchFaq = createAsyncThunk(
  "faqBlock/fetchAll",
  async (_, thunkAPI) => {
    try {
      const UrlEndpoint = ""; //write you endpoint in UrlEndpoint  for example(https://jsonplaceholder.typicode.com/users)

      const response = await axios.get<DataType[]>(UrlEndpoint);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to load data");
    }
  }
);
