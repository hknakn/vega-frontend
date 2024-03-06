import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="w-2/12 bg-neutral-950 text-white p-4 h-screen border-r-[1px] border-white/20">
      <h1 className="text-3xl font-semibold my-4 ml-3">Vega</h1>
      <ul className="space-y-2">
        <li>
          <Link
            to="/"
            className="block py-2 px-4 rounded transition duration-300 hover:bg-neutral-800"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/opportunities"
            className="block py-2 px-4 rounded transition duration-300 hover:bg-neutral-800"
          >
            Opportunities
          </Link>
        </li>
        <li>
          <Link
            to="/documents"
            className="block py-2 px-4 rounded transition duration-300 hover:bg-neutral-800"
          >
            Documents
          </Link>
        </li>
        <li>
          <Link
            to="/help-centre"
            className="block py-2 px-4 rounded transition duration-300 hover:bg-neutral-800"
          >
            Help Centre
          </Link>
        </li>
      </ul>
    </div>
  );
};

