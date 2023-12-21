import { configureStore } from "@reduxjs/toolkit";
import videoListReducer from "../slices/videoListSlice"
// import categoryReducer from "../slices/categorySlice"

export const store = configureStore({
    reducer : {
        videoListSlice: videoListReducer,
    }
})