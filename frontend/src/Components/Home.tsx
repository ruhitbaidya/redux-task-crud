/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { IoTrashSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { useGetAllProductQuery } from "../redux/authApi/authApiInject";
const Home = () => {
  const { data, isLoading } = useGetAllProductQuery("");
  const navigate = useNavigate();
  const handelRedirect = (id: string) => {
    console.log(id);
    navigate("/edit-data");
  };
  return (
    <div>
      <div className="w-[60%] mx-auto mt-[20px]">
        <div className="flex justify-between items-center">
          <div>
            <h5 className="font-bold mb-[10px] ml-[10px]">Filter</h5>
            <button className="bg-purple-700 px-[30px] py-[6px] rounded-lg text-white ml-[5px] cursor-pointer">
              Student
            </button>
            <button className="bg-purple-700 px-[30px] py-[6px] rounded-lg text-white ml-[5px] cursor-pointer">
              Teacher
            </button>
            <button className="bg-purple-700 px-[30px] py-[6px] rounded-lg text-white ml-[5px] cursor-pointer">
              Driver
            </button>
            <button className="bg-purple-700 px-[30px] py-[6px] rounded-lg text-white ml-[5px] cursor-pointer">
              Business
            </button>
            <div className="mt-[20px] relative">
              <input
                className="w-full p-[9px] border border-purple-700 outline-none rounded-lg"
                placeholder="Search"
                type="text"
              />
              <button className="px-[30px] py-[10px] bg-purple-700 rounded-r-lg absolute right-0 text-white">
                Search
              </button>
            </div>
          </div>
          <Link to="/create-task">
            <button className="bg-purple-700 flex justify-center items-center gap-[8px] text-white px-[40px] py-[8px] rounded-lg cursor-pointer">
              <FaPlus size={20} />
              <span>Add Task</span>
            </button>
          </Link>
        </div>
        {isLoading ? (
          <span>Loading....</span>
        ) : (
          <div className="border mt-[20px] p-[10px] rounded-lg">
            <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                    Id
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                    Profession
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.map((item: any) => (
                  <tr className="border-b hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {item?._id.slice(0, 6)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {item?.firstName} {item?.lastName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {item?.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {item?.profession}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {/* Replace with actual icons as needed */}
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handelRedirect("idskd")}
                          className="text-blue-500 hover:text-blue-700 cursor-pointer"
                        >
                          <FiEdit size={20} />
                        </button>
                        <button className="text-red-500 hover:text-red-700 cursor-pointer">
                          <IoTrashSharp size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
