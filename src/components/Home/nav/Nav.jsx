import user from "../../../assets/user.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const links = (
    <>
      <li>
        <NavLink activeClassName="active" className="NavLink" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="active"
          className="NavLink"
          to="/"
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="active"
          className="NavLink"
          to="/"
          to="/carrer"
        >
          Carrer
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex items-center gap-2">
          <img className="w-[45px]" src={user} alt="" />
          <a className="btn bg-gray-800 text-white">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
