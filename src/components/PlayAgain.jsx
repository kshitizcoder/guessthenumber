import React from "react";
import { useDispatch } from "react-redux";
import {
  getNumber,
  getScore,
  getUserNumber,
  isClicked,
  iscorrect,
} from "../store/numberSlice";

const PlayAgain = () => {
  const dispatch = useDispatch();
  let num = Math.floor(Math.random() * 20 + 1);

  const handlePlayAgain = () => {
    // const score = 20;
    // dispatch(getScore(score));
    dispatch(getNumber(num));
    dispatch(getUserNumber(""));
    dispatch(isClicked(true));
    dispatch(iscorrect(false));
    document.body.style.backgroundColor = "#1e1e1e";
  };
  return (
    <button
      onClick={handlePlayAgain}
      className="text-pure border border-pure px-12 py-2 mt-10"
    >
      Play Again
    </button>
  );
};

export default PlayAgain;
