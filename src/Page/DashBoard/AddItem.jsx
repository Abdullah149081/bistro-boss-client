/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Title from "../../Components/SectionTitle/Title";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const img_token = import.meta.env.VITE_IMG_TOKEN;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_url = `https://api.imgbb.com/1/upload?key=${img_token}`;

  const onSubmit = (data) => {
    data.price = parseFloat(data.price);

    // img hosting
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const imgURL = imgRes.data.display_url;
          data.image = imgURL;
          axiosSecure.post("/menu", data).then((item) => {
            if (item.data.insertedId) {
              Swal.fire({
                title: "success",
                text: "Item add successfully ",
                icon: "success",
                confirmButtonText: "Cool",
              });
              reset();
            }
          });
        }
      });
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text font-semibold text-base">Recipe Name*</span>
                </label>
                <input {...register("name", { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full " />
              </div>
              <div className="flex my-4">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-semibold text-base">Category*</span>
                  </label>
                  <select {...register("category", { required: true })} defaultValue="Pick One" className="select select-bordered">
                    <option disabled>Pick One</option>
                    <option className="capitalize">pizza</option>
                    <option className="capitalize">soup</option>
                    <option className="capitalize">salad</option>
                    <option className="capitalize">dessert</option>
                    <option className="capitalize">drinks</option>
                  </select>
                </div>
                <div className="form-control w-full ml-4">
                  <label className="label">
                    <span className="label-text font-semibold text-base">Price*</span>
                  </label>
                  <input {...register("price", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base">Recipe Details</span>
                </label>
                <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details" />
              </div>
              <div className="form-control w-full my-4">
                <label className="label">
                  <span className="label-text font-semibold text-base">Item Image*</span>
                </label>
                <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full " />
              </div>
              <button type="submit" className="btn bg-gradient-to-r from-[#835D23] from-0%  to-[#B58130] to-100% border-0 font-bold tracking-wide">
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
