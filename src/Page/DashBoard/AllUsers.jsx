import { useQuery } from "@tanstack/react-query";

import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield, FaUsers } from "react-icons/fa";
import Title from "../../Components/SectionTitle/Title";

const AllUsers = () => {
  const { refetch, data: users = [] } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  const handleAdmin = (admin) => {};

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <div className="boss-container">
        <Title>
          <span className="text-white lg:text-[#D99904]">---How many??---</span>
          <span className="text-2xl lg:text-4xl">MANAGE ALL USERS</span>
        </Title>
        <div>
          <div className="bg-[#FFFFFF] border p-4 lg:p-[50px]  ">
            <div className="flex  justify-between items-center">
              <h2 className="text-[#151515] lg:text-4xl font-bold font-cinzel">Total orders: {users.length || 0}</h2>
            </div>
            {/* TODO: Table working pagination  */}
            <div className="overflow-x-auto ">
              <table className="table w-full mt-10 text-center  table-pin-rows">
                <thead>
                  <tr>
                    <th className="bg-[#D1A054] text-white tracking-wide">#</th>
                    <th className="bg-[#D1A054] text-white tracking-wide">NAME</th>
                    <th className="bg-[#D1A054] text-white tracking-wide">EMAIL</th>
                    <th className="bg-[#D1A054] text-white tracking-wide">ROLE</th>
                    <th className="bg-[#D1A054] text-white tracking-wide">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {users.slice(0, 6).map((user, idx) => (
                    <tr key={user._id}>
                      <td className="font-bold">{idx + 1}</td>
                      <td className="text-[#737373] text-lg ">{user.name}</td>
                      <td className="text-[#737373] text-lg ">{user.email}</td>
                      <td>
                        <button onClick={() => handleAdmin(user._id)} type="button" className="btn  bg-[#D1A054] border-0 ">
                          {user.roll === "admin" ? <FaUserShield className="w-5 h-5" /> : <FaUsers className="w-5 h-5" />}
                        </button>
                      </td>
                      <th>
                        <button type="button" className="btn bg-red-600 border-0 ">
                          <FaTrashAlt className="w-5 h-5" />
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
