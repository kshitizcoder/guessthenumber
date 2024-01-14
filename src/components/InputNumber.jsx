import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserNumber } from "../store/numberSlice";

const InputNumber = () => {
  const [number, setNumber] = useState(null);

  const dispatch = useDispatch();
  const handleSumbit = (e) => {
    e.preventDefault();
    if (number) {
      dispatch(getUserNumber(number));
    }
  };
  const inputNumber = useSelector((state) => state.number.userNumber);
  // console.log(inputNumber);
  return (
    <section className="px-10 mt-5">
      <div className="warpper">
        <form action="#" onSubmit={handleSumbit}>
          <input
            type="number"
            placeholder="Guess Number"
            // value={}
            className="px-5 py-2 text-pure caret-pure w-[70%]"
            onChange={(e) => setNumber(e.target.value)}
            min={1}
          />
          <button
            type="sumbit"
            className="text-pure bg-primary px-8 py-[0.62rem] mt-3 lgmd:mt-0"
          >
            Sumbit
          </button>
        </form>
      </div>
    </section>
  );
};

export default InputNumber;
