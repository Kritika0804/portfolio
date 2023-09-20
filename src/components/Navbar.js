import React from "react";
import { Link } from "react-scroll";

import { navLinksdata } from "../constants/index";

function Navbar() {
  return (
    <div className="w-full h-24 z-50 bg-bodyColor sticky top-0  flex justify-center items-center text-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-#ff014f tracking-wide cursor-pointer hover:text-[#ff014f] duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
