import { useState } from "react";
import { navbarData } from "../navbarData";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const showNav = () => {
    setToggle(!toggle);
  };

  // start mobile first plus facile
  return (
    <nav className="shadow z-50 sticky top-0 w-full md:h-20 bg-white items-center flex p-4">
      <div className="flex justify-between md:justify-evenly items-center w-full flex-wrap md:flex-nowrap">
        <Link to="/" className="flex items-center">
          <h1 className="text-3xl md:text-5xl text-black  font-display font-bold cursor-pointer"><span className="text-blue-800">Cook</span> <span className="text-blue-800">and</span>  <span className="text-blue-800">More</span></h1>
          
        </Link>

        <button
          className="flex justify-end md:hidden ring-1 ring-black rounded"
          onClick={showNav}
        >
          <svg
            className="text-white w-9 h-9 flex justify-center items-center hover:text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>

        <ul
          className={`${
            toggle ? " flex" : " hidden"
          } flex-col justify-center items-center w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
        >
          {navbarData.map((link, index) => {
            return (
              <li key={index} className={link.cname}>
                <NavLink
                  className={({ isActive}) => `${isActive ? "md:bg-sky-500":""} ${isActive ? "md:text-white":"text-black"} md:border-solid md:border-1 md:border-black md:hover:bg-sky-500 md:hover:text-white md:rounded-xl md:px-4 md:py-2 md:transition-all md:duration-300 md:ease-in-out md:transform md:font-medium md:w-full`}
                  to={link.href}
                  onClick={showNav}
                >
                  {link.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
