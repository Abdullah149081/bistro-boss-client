import React from "react";

const Title = ({ children }) => {
  return (
    <div className="text-center my-10">
      <h2 className="text-[#D99904] font-semibold text-2xl  italic">{children[0]}</h2>
      <h2 className="lg:w-1/2 mx-auto text-4xl font-bold  border-y-4 border-[#E8E8E8] mt-6 py-6">{children[1]}</h2>
    </div>
  );
};

export default Title;
