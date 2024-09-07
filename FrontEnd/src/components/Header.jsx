import {
  HiHome,
  HiSearch,
  HiStar,
  HiPlay,
  HiDotsVertical,
} from "react-icons/hi";
import { HiPlus, HiTv } from "react-icons/hi2";
import logo from "../assets/logo.svg";
const Header = () => {
  const menu = [
    {
      name: "HOME",
      Icon: HiHome,
    },
    {
      name: "SEARCH",
      Icon: HiSearch,
    },
    {
      name: "WATCHLIST",
      Icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      Icon: HiStar,
    },
    {
      name: "MOVIES",
      Icon: HiPlay,
    },
    {
      name: "SERIES",
      Icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-5 items-center justify-center">
        <img
          src={logo}
          alt="logo"
          className="w-[60px] md:w-[115px] object-cover cursor-pointer"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <div
              key={item.name}
              className="flex items-center px-4 cursor-pointer gap-1 text-white text-[0.938rem] cursor-pointer font-semibold hover:underline
          underline-offset-8"
            >
              <item.Icon className="mr-2" />
              <h2> {item.name}</h2>
            </div>
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <div
                  key={item.name}
                  className="flex items-center px-4 cursor-pointer gap-1 text-white text-[0.938rem] cursor-pointer font-semibold hover:underline
          underline-offset-8"
                >
                  <item.Icon className="mr-2" />
                </div>
              )
          )}
          <div className="md:hidden flex items-center px-4 cursor-pointer gap-1 text-white text-[0.938rem] cursor-pointer font-semibold hover:underline
          underline-offset-8">
            <HiDotsVertical className="mr-2" />
          </div>
        </div>
      </div>
      <img
        src="/src/assets/scale.png"
        alt=""
        className="w-[48px] rounded-b-full"
      />
    </div>
  );
};

export default Header;
