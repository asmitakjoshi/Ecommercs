import {Link} from "react-router-dom";

const Navlink = (props) => {
  return (
    <Link
      to={props.to}
      className={`p-2.5 rounded-md px-3 text-sm font-medium ${props.active ? "bg-blue-700 text-white" : "text-gray-300 hover:bg-blue-500 hover:text-white"} block w-full text-left`}
      aria-current={props.active ? "page" : undefined}
    >
      {props.children}
    </Link>
  );
};

export default Navlink;
