import React from "react";

const Boss = () => {
  return (
    <div className="boss-container">
      <div className="bg-[url('assets/home/chef-service.jpg')] boss-container bg-no-repeat ">
        <div className="bg-white rounded-md">
          <div className="text-center h-96 flex flex-col justify-center items-center ">
            <div className="space-y-4 w-3/4 lg:w-1/2 mx-auto">
              <h2 className="text-4xl lg:text-5xl  font-cinzel uppercase tracking-wider">
                B<span className="lg:text-[40px]">istro</span> B<span className="lg:text-[40px]">oss</span>
              </h2>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore
                at, nihil iusto ducimus incidunt quibusdam nemo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boss;
