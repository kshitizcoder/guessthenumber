import React from "react";
import Number from "./Number";
import Iscorrect from "./Iscorrect";
import InputNumber from "./InputNumber";
import Score from "./Score";
import PlayAgain from "./PlayAgain";

const Home = () => {
  return (
    <section className="flex justify-center items-center flex-col h-[70vh]">
      <h1 className="text-pure text-2xl mt-10 bg-primary text-center w-[60%] mx-auto py-2 rounded-lg">
        Guess The Number Between 1 - 20
      </h1>
      <Number />
      <Iscorrect />
      <div className=" md:flex items-center justify-evenly px-5">
        <InputNumber />
        <Score />
      </div>
      <div className="">
        <PlayAgain />
      </div>
    </section>
  );
};

export default Home;
