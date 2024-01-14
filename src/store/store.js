import { configureStore } from "@reduxjs/toolkit";
import numberSlice from "./numberSlice";



const store = configureStore({
    reducer: {
        number: numberSlice,

    }
    ,
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //     serializableCheck: false
    //     })
});

export default store;