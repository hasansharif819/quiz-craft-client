// AddQuizSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TStepperInitialState = {
  activeStep: number;
};

const initialState: TStepperInitialState = {
  activeStep: 0,
};

export const quizSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    setActiveStep: (
      state,
      action: PayloadAction<TStepperInitialState["activeStep"]>
    ) => {
      state.activeStep = action.payload;
    },
  },
});

export const { setActiveStep } = quizSlice.actions;

export default quizSlice.reducer;
