import { NavLink } from "react-router-dom";
import { TbWorldDown } from "react-icons/tb";
import { IoHome } from "react-icons/io5";
const Navbat = () => {
  return (
    <div>
      <div className="w-[60%] mx-auto bg-purple-900 p-[10px] rounded-lg px-[30px]">
        <div className="flex justify-between items-center text-white">
          <div>
            <h3 className="font-bold flex gap-[8px] justify-center items-center">
              <TbWorldDown size={27} />
              <span>RCRUDO</span>
            </h3>
          </div>
          <div>
            <ul>
              <li>
                <NavLink
                  className="flex justify-center items-center gap-[8px]"
                  to="/"
                >
                  <IoHome /> <span>Home</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbat;
