import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";
import userReducer from "../features/user/userSlice";
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    user: userReducer,
    theme: themeReducer,
  },
});