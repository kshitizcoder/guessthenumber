import { createSlice } from "@reduxjs/toolkit";




export const numberSlice = createSlice({
    name: "number",
    initialState: {
        secretNumber: 0,
        userNumber: null,
        score: 20,
        highScore: 0,
        isClicked: false,
        correct: false
    },
    reducers: {
        getNumber: (state, action) => {

            state.secretNumber = action.payload;
        },
        getUserNumber: (state, action) => {

            state.userNumber = action.payload;
        },
        getScore: (state, action) => {
            state.score = action.payload
            // console.log("Hello", action.payload);

        }, getHighScore: (state, action) => {
            state.highScore = action.payload
        },
        isClicked: (state, action) => {
            state.isClicked = action.payload
        },
        iscorrect: (state, action) => {
            state.correct = action.payload
        }
    }


})




export default numberSlice.reducer

export const { getNumber, getUserNumber, getScore, getHighScore, isClicked, iscorrect } = numberSlice.actions;