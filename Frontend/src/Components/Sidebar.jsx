import { useState } from "react";
import Navbar from "./Navbar";

const Sidebar = () =>{
  const [sidebarFull, setsidebarFull] = useState("false");
  
const toggleSidebar =() =>{
  setsidebarFull(!sidebarFull);
}
  return(
 <>
    <div
      className={`absolute sidebar top-0 bottom-0 lg:left-0 p-2  w-[${sidebarFull? '250px':'30px'}] h-100  overflow-y-auto text-center bg-gray-800`}
    >
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center">
          <button onClick={toggleSidebar}>
          <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
          </button>
          <h1 className="font-bold text-gray-200 text-[15px] ml-3">Admin</h1>
          <i
            className="bi bi-x cursor-pointer ml-28 lg:hidden"
          ></i>
        </div>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      <Navbar />  
    </div>
    </>  
  )
}
export default Sidebar