/* eslint-disable react/no-unescaped-entities */

import { FaUtensils } from "react-icons/fa";
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
            <form>
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text font-semibold text-base">Recipe Name*</span>
                </label>
                <input type="text" placeholder="Recipe Name" className="input input-bordered w-full " />
              </div>
              <div className="flex my-4">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-semibold text-base">Category*</span>
                  </label>
                  <select defaultValue="Pick One" className="select select-bordered">
                    <option disabled>Pick One</option>
                    <option>Pizza</option>
                    <option>Soup</option>
                    <option>Salad</option>
                    <option>Dessert</option>
                    <option>Desi</option>
                    <option>Drinks</option>
                  </select>
                </div>
                <div className="form-control w-full ml-4">
                  <label className="label">
                    <span className="label-text font-semibold text-base">Price*</span>
                  </label>
                  <input type="number" placeholder="Type here" className="input input-bordered w-full " />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base">Recipe Details</span>
                </label>
                <textarea className="textarea textarea-bordered h-24" placeholder="Recipe Details" />
              </div>
              <div className="form-control w-full my-4">
                <label className="label">
                  <span className="label-text">Item Image*</span>
                </label>
                <input type="file" className="file-input file-input-bordered w-full " />
              </div>
              <button type="button" className="btn bg-gradient-to-r from-[#835D23] from-0%  to-[#B58130] to-100% border-0 font-bold tracking-wide">
                <span className="inline-flex gap-3 items-center">
                  Add Item <FaUtensils />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
