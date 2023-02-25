import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import useDarkMode from "../../useDarkMode";
import { FaMoon } from "react-icons/fa";
const NavBar = (props) => {
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2">NerdCard</div>
        {isDarkMode ? (
          <BsSunFill
            size={"24px "}
            color="#e9b46a"
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        ) : (
          <FaMoon
            size={"24px "}
            color="#e9b46a"
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        )}
      </div>
      <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
        {openMenu && isMobile ? (
          <MdOutlineClose
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : (
          <>
            <li className="btn-hover">Features</li>
            <li className="btn-hover">Menu</li>
            <li className="btn-hover">Our Story</li>
            <li className="btn-hover ml-28">Contact</li>
          </>
        )}
        {openMenu && (
          <div className="z-10 absolute right-0 bg-gradient-to-t from-purple-700 to bg-purple-500 p-8 text-center text-24 text-white w-[100%] h-[100%]">
            <li className="cursor-pointer mb-[40px]">Features</li>
            <li className="cursor-pointer mb-[40px]">Menu</li>
            <li className="cursor-pointer mb-[40px]">Our Story</li>
            <li className="cursor-pointer mb-[40px]">Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
