import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFaqDataType } from "../../../types/IFaqDataType";
import { fetchFaq } from "./FaqActionCreator";

export const fakeDataFaq: IFaqDataType[] = [
  {
    id: 1,
    title: "What are lorem ipsum  dolor sit amet lorem ipsum?",
    description:
      "What</br> <h1>are</h1> <h1>lorem</h1> ipsum <i>dolor<i> sit </br>amet lorem ipsum?",
  },
  {
    id: 2,
    title: "What are lorem ipsum dolor sit amet lorem ipsum?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. </br>Curabitur pellentesque nulla a porta malesuada. Vivamus ultricies sed justo ac vehicula. Ut dapibus sit amet nibh ac malesuada. Nam sagittis eget risus eu commodo. Nam nec tempor magna. Vivamus porta rutrum augue et molestie. Curabitur eget ullamcorper sem, rutrum imperdiet enim. Morbi bibendum mauris non venenatis vulputate. Suspendisse condimentum quam eget orci tristique, ac aliquet nibh malesuada.",
  },
  {
    id: 3,
    title: "What are lorem ipsum dolor sit amet lorem ipsum?",
    description:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    id: 4,
    title: "What are lorem ipsum dolor sit amet lorem ipsum?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque nulla a porta malesuada. Vivamus ultricies sed justo ac vehicula. Ut dapibus sit amet nibh ac malesuada. Nam sagittis eget risus eu commodo. Nam nec tempor magna. Vivamus porta rutrum augue et molestie. Curabitur eget ullamcorper sem, rutrum imperdiet enim. Morbi bibendum mauris non venenatis vulputate. Suspendisse condimentum quam eget orci tristique, ac aliquet nibh malesuada.",
  },
  {
    id: 5,
    title: "What are lorem ipsum dolor sit amet lorem ipsum?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    id: 6,
    title: "What are lorem ipsum dolor sit amet lorem ipsum?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    id: 7,
    title: "What are lorem ipsum dolor sit amet lorem ipsum?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    id: 8,
    title: "What are lorem ipsum dolor sit amet lorem ipsum?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque nulla a porta malesuada. Vivamus ultricies sed justo ac vehicula. Ut dapibus sit amet nibh ac malesuada. Nam sagittis eget risus eu commodo. Nam nec tempor magna. Vivamus porta rutrum augue et molestie. Curabitur eget ullamcorper sem, rutrum imperdiet enim. Morbi bibendum mauris non venenatis vulputate. Suspendisse condimentum quam eget orci tristique, ac aliquet nibh malesuada.",
  },
  {
    id: 9,
    title: "What are lorem ipsum dolor sit amet lorem ipsum?",
    description: "33Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 10,
    title: "What are lorem ipsum dolor sit amet lorem ipsum?",
    description: "22Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 11,
    title: "What are lorem ipsum dolor sit amet lorem ipsum?",
    description: "11Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const initialState = {
  faqBlock: fakeDataFaq,
  isLoading: false,
  error: "",
};

export const faqDataSlice = createSlice({
  name: "faqBlock",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFaq.fulfilled.type]: (
      state,
      action: PayloadAction<IFaqDataType[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.faqBlock = action.payload;
    },

    [fetchFaq.pending.type]: (state) => {
      state.isLoading = true;
    },

    [fetchFaq.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default faqDataSlice.reducer;
