import { Link, useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { IoTrashSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
const Home = () => {
  const navigate = useNavigate();
  const handelRedirect = (id: string) => {
    console.log(id);
    navigate("/edit-data");
  };
  return (
    <div>
      <div className="w-[60%] mx-auto mt-[20px]">
        <div className="flex justify-end items-center">
          <Link to="/create-task">
            <button className="bg-purple-800 flex justify-center items-center gap-[8px] text-white px-[40px] py-[8px] rounded-lg cursor-pointer">
              <FaPlus size={20} />
              <span>Add Task</span>
            </button>
          </Link>
        </div>

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
              <tr className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm text-gray-800">45ad5</td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  Ruhit Baidya
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  ruhitbaidya01@gmail.com
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">Learner</td>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
