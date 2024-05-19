import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./UI/Dropdown";
import DropdownItem from "./UI/DropdownItem";

export default function Navbar() {
  return (
    <React.Fragment>
      <div className="navbar bg-white">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-2xl">
            UniRead
          </Link>
        </div>
        <div className="flex-none gap-2">
          {/* Navbar books dropdown */}
          <Dropdown text="Books">
            <DropdownItem>
              <Link to="/">Item 1</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/">Item 2</Link>
            </DropdownItem>
          </Dropdown>

          {/* Navbar write dropdown */}
          <Dropdown text="Write">
            <DropdownItem>
              <Link to="/">Item 1</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/">Item 2</Link>
            </DropdownItem>
          </Dropdown>

          {/* Navbar library dropdown */}
          <Link
            to="/library"
            className="px-4 py-2 rounded-full transition-colors duration-200 ease-in-out bg-transparent hover:bg-gray-200 font-semibold"
          >
            Library
          </Link>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
