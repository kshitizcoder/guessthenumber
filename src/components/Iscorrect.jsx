import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Score from "./Score";
import {
  getHighScore,
  getScore,
  isClicked,
  iscorrect,
} from "../store/numberSlice";
import ConfettiExplosion from "react-confetti-explosion";

const Iscorrect = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.number.secretNumber);
  const inputNumber = useSelector((state) => state.number.userNumber);
  const highScore = useSelector((state) => state.number.highScore);
  const isClick = useSelector((state) => state.number.isClicked);

  const [isCorrect, setIsCorrect] = useState("");
  const [isRight, setIsRight] = useState(false);
  let [score, setScore] = useState(20);
  useEffect(() => {
    dispatch(getScore(score));
  }, [score]);
  let num = score - 1;
  useEffect(() => {
    if (inputNumber && inputNumber < number) {
      setScore(num);

      if (score === 1) {
        setIsCorrect("Game Over 😢😢");
      } else {
        setIsCorrect("Secret Number Is Greater");
      }
    } else if (inputNumber && inputNumber > number) {
      setScore(num);

      if (score === 1) {
        setIsCorrect("Game Over 😢😢");
      } else {
        setIsCorrect("secret  Number is Smaller");
      }
    } else if (inputNumber * 1 && inputNumber * 1 === number * 1) {
      setIsCorrect("Correct Number 🎉🎉");
      // document.body.style.backgroundColor = "#2d9c0c";
      // dispatch(iscorrect(true));

      dispatch(getHighScore(score > highScore ? score : highScore));
    } else if (isClick) {
      setIsCorrect("");
      setScore(20);
    }
  }, [inputNumber, number]);

  return (
    <div className="mt-5">
      <h3 className="isCorrect text-center text-pure">{isCorrect}</h3>
    </div>
  );
};

export default Iscorrect;
