/* eslint-disable import/no-unresolved */
import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../../../Components/SectionTitle/Title";

import "@smastrom/react-rating/style.css";

import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://bistro-boss-server-five-kappa.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="boss-container">
      <Title>
        <span>---What Our Clients Say---</span>
        <span>TESTIMONIALS</span>
      </Title>
      <div>
        <Swiper navigation modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="w-3/5 mx-auto mt-6 space-y-4">
                <div className="flex flex-col items-center ">
                  <div>
                    <svg aria-hidden="true" className="w-[80px] h-[80px] text-gray-900 dark:text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                </div>

                <p className="">{review.details}</p>
                <h2 className="text-[#CD9003] text-3xl font-semibold uppercase">{review.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
