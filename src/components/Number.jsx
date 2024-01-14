import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNumber, iscorrect } from "../store/numberSlice";

const Number = () => {
  let num = Math.floor(Math.random() * 20 + 1);
  let dispatch = useDispatch();

  dispatch(getNumber(num));

  const [secretNumber, setSecretNumber] = useState("?");
  const number = useSelector((state) => state.number.secretNumber);
  const correct = useSelector((state) => state.number.correct);

  // useEffect(() => {
  //   if (correct) {
  //     setSecretNumber(number);
  //   } else {
  //     setSecretNumber("?");
  //     // dispatch(isCorrect(false));
  //   }
  // }, [correct]);
  // console.log(number);
  return (
    <section className="number mt-5">
      <div className="warpper">
        <h2 className="text-pure text-4xl border-2 py-2 px-14 border-pure text-center mx-auto">
          ?
        </h2>
      </div>
    </section>
  );
};

export default Number;
