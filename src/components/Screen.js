import React from "react";

const Screen = ({ input, result }) => {
  return (
    <>
      <div>
        <div className="bg-gray-700 text-white  h-28 border-2 rounded-lg flex  justify-end">
          {input}
          <p className="font-sans font-bold leading-5 text-[25px] m-4 p-2">
            {result}
          </p>
        </div>
      </div>
    </>
  );
};

export default Screen;
