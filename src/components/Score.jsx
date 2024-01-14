import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHighScore, getScore } from "../store/numberSlice";
// import { getHighScore, getScore } from "../store/numberSlice";

const Score = () => {
  let score = useSelector((state) => state.number.score);
  // let score = useSelector((state) => state);

  let highscore = useSelector((state) => state.number.highScore);
  const inputNumber = useSelector((state) => state.number.userNumber);
  // const high = (inputNumber&&score > highscore) ? score 0;
  const dispatch = useDispatch();
  // dispatch(getHighScore(high));
  // console.log(score);

  return (
    <section className="scorebox mt-8">
      <div className="wrapper ">
        <h2 className="text-primary">
          Score : <span className="score text-pure">{score}</span>
        </h2>
        <h2 className="text-primary">
          Highscore : <span className="highscore text-pure">{highscore}</span>
        </h2>
      </div>
    </section>
  );
};

export default Score;
