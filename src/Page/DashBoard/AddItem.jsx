import React from "react";

import PageTitle from "../../Components/PageTitle/PageTitle";
import Title from "../../Components/SectionTitle/Title";

const AddItem = () => {
  return (
    <div className="w-full">
      <PageTitle title="Add Item" />
      <div className="boss-container">
        <Title>
          <span className="text-white lg:text-[#D99904]">---What's new?---</span>
          <span className="text-2xl lg:text-4xl">ADD AN ITEM</span>
        </Title>
        <div>
          <div className="bg-[#F3F3F3] border p-4 lg:p-[50px]  ">
            <h1>h</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
