import React from "react";

const Buttons = ({ setInput, input, handleCalculate, setResult }) => {
  // ****************//
  return (
    <div className="flex flex-col font-sans font-b">
      <div className="grid-cols-12 grid rounded-lg">
        <div className="col-span-6 flex " onClick={() => setResult(0)}>
          <button
            className="w-full m-2 p-6 border-2 font-sans justify-center"
            onClick={() => setInput("")}
          >
            <span className>AC</span>
          </button>
        </div>
        <div className="grid col-span-6 grid-cols-12">
          <div
            className="col-span-6"
            onClick={() => setInput((p) => p.slice(0, -1))}
          >
            <button className="m-2  border-2  p-6">DEL</button>
          </div>
          <div className="col-span-6">
            <button
              className="m-2 p-6 grid grid-cols-4 border-2 "
              onClick={() => setInput(input.concat("/"))}
            >
              ÷
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 justify-between">
        <button
          className=" border-2  m-1 p-4"
          onClick={() => setInput(input.concat("1"))}
        >
          1
        </button>
        <button
          className=" border-2  m-1 p-4"
          onClick={() => setInput(input.concat("2"))}
        >
          2
        </button>
        <button
          className=" border-2  m-1 p-4"
          onClick={() => setInput(input.concat("3"))}
        >
          3
        </button>
        <button
          className=" border-2  m-1 p-4"
          onClick={() => setInput(input.concat("*"))}
        >
          *
        </button>
      </div>
      <div className="grid grid-cols-4  justify-between">
        <button
          className=" border-2  m-1 p-4"
          onClick={() => setInput(input.concat("4"))}
        >
          4
        </button>
        <button
          className=" border-2  m-1 p-4"
          onClick={() => setInput(input.concat("5"))}
        >
          5
        </button>
        <button
          className=" border-2  m-1 p-4"
          onClick={() => setInput(input.concat("6"))}
        >
          6
        </button>
        <button
          className=" border-2  m-1 p-4"
          onClick={() => setInput(input.concat("+"))}
        >
          +
        </button>
      </div>

      <div className="grid grid-cols-4  justify-between">
        <button
          className=" border-2  m-1 p-4"
          onClick={() => setInput(input.concat("7"))}
        >
          7
        </button>
        <button
          className=" border-2  m-1 p-4"
          onClick={() => setInput(input.concat("8"))}
        >
          8
        </button>
        <button
          className=" border-2  m-1 p-4"
          onClick={() => setInput(input.concat("9"))}
        >
          9
        </button>
        <button
          className=" border-2  m-1 p-4"
          onClick={() => setInput(input.concat("-"))}
        >
          -
        </button>
      </div>
      <div className="grid grid-cols-4 justify-between">
        <button
          className=" border-2  m-1 p-4"
          onClick={() => setInput(input.concat("."))}
        >
          .
        </button>
        <button
          className=" border-2  m-1 p-4"
          onClick={() => setInput(input.concat("0"))}
        >
          0
        </button>
        <div className="grid col-span-2">
          <button
            className=" m-2 p-6 border-black bg-blue-900 font-sans"
            onClick={() => handleCalculate()}
          >
            <span className=" text-white text-[25px] font-bold">=</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
