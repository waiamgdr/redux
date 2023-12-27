import { configureStore } from "@reduxjs/toolkit";
import todoslice from "./slice";
export default configureStore({reducer:{todoslice}});