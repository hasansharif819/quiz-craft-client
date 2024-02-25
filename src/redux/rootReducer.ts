import quizReducer from "./features/quiz/quizSlice";
import moduleReducer from "./features/module/moduleSlice";
import stepperReducer from "./features/stepper/stepperSlice";
import tabsReducer from "./features/tabs/tabSlice";
import { baseApi } from "./api/baseApi";

export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  quiz: quizReducer,
  module: moduleReducer,
  stepper: stepperReducer,
  tabs: tabsReducer,
};
