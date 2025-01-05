import React, { useState } from "react";
import Screen from "./Screen";
import Buttons from "./Buttons";

const Main = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    // const displayResult = eval(input);
    // setResult(displayResult);
    setResult(eval(input));
  };
  // const handleCalculate = () => {
  //   const calculatedResult = eval(input); // Calculate the result
  //   setResult(calculatedResult); // Update the result state
  // };

  return (
    <div className="w-[full] h-[100vh] flex justify-center items-center bg-yellow-800">
      <div className="w-[350px]  h-[80vh] flex flex-col border-2 bg-blue-200">
        <Screen input={input} result={result} />
        <Buttons
          setInput={setInput}
          input={input}
          handleCalculate={handleCalculate}
          setResult={setResult}
        />
      </div>
    </div>
  );
};

export default Main;
