// AddQuizSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTabsInitialState = {
  value: string;
};

const initialState: TTabsInitialState = {
  value: "quiz-list",
};

export const tabSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setTab: (state, action: PayloadAction<TTabsInitialState["value"]>) => {
      state.value = action.payload;
    },
  },
});

export const { setTab } = tabSlice.actions;

export default tabSlice.reducer;
