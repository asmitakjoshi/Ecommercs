import React, { useState } from "react";
import { Link } from "react-router-dom";
import Usermenu from "./Usermenu";
import Navlink from "./Navlink";
const Navbar = () => {
  const navmenus = [
    {
      name:"Dashboard",
      path:"/",
    }, 
    {
      name:"AddProducts",
    path:"/addproducts"
    }, 
    {
      name:"UpdateProducts",
    path:"/updateproducts"
      },
    {
      name:"ViewProducts",
    path:"/viewproducts"
      }
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <nav className="">
        <ul>
          {navmenus.map((item, index) => (
            <li className=" mt-3 flex items-center rounded-md  duration-300 cursor-pointer text-white w-full" key={index}>
              <Navlink
                to={item.path}
                active={item === "Dashboard"}
              >
                {item.name}
              </Navlink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
