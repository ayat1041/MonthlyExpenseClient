import {
  Popover,
  PopoverSurface,
  PopoverTrigger,
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";

const Navbar = () => {
  const contents = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "w-full text-center text-base cursor-pointer bg-red-950 p-2 lg:px-4 rounded-2xl transition-all duration-500 ease-in"
            : "w-full text-center text-base cursor-pointer hover:bg-red-950 p-2 lg:px-4 rounded-lg hover:rounded-2xl transition-all duration-500 ease-in"
        }
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/monthly-plan"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "w-full text-center text-base cursor-pointer bg-red-950 p-2 lg:px-4 rounded-2xl transition-all duration-500 ease-in"
            : "w-full text-center text-base cursor-pointer hover:bg-red-950 p-2 lg:px-4 rounded-lg hover:rounded-2xl transition-all duration-500 ease-in"
        }
      >
        <li>Plans</li>
      </NavLink>
      <NavLink
        to="/tracker"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "w-full text-center text-base cursor-pointer bg-red-950 p-2 lg:px-4 rounded-2xl transition-all duration-500 ease-in"
            : "w-full text-center text-base cursor-pointer hover:bg-red-950 p-2 lg:px-4 rounded-lg hover:rounded-2xl transition-all duration-500 ease-in"
        }
      >
        <li>Tracker</li>
      </NavLink>
    </>
  );
  return (
    <nav className="flex z-50 items-center justify-between w-full bg-red-700 text-white text-xl py-2 px-4 sticky top-0">
      <div className="text-white text-bold">
        <span className="text-2xl font-medium">P</span>lanner
        <span className="text-2xl font-medium">A</span>gent
      </div>
      <ul className="hidden md:flex gap-4 items-center justify-center ml-auto">
        {contents}
      </ul>
      <div className="hidden md:flex ml-2">
        <Popover>
          <PopoverTrigger disableButtonEnhancement>
          {/* <IconContext.Provider value={{ color: "white", className: "global-class-name" }}> */}
            <div>
              <FiLogIn className="text-2xl text-slate-100"/>
            </div>
            {/* </IconContext.Provider> */}
          </PopoverTrigger>

          <PopoverSurface>
            <div className="flex flex-col items-center gap-2">
              <Link to="/login">
                <button className="px-2 py-2 bg-red-700 hover:bg-red-950 transition-all duration-500 ease-in text-white rounded-md font-medium">
                  LOGIN
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-2 py-2 bg-red-700 hover:bg-red-950 transition-all duration-500 ease-in text-white rounded-md font-medium">
                  SIGNUP
                </button>
              </Link>
            </div>
          </PopoverSurface>
        </Popover>
      </div>
      <div className="flex mx-2 md:hidden">
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <div><CgMenuRight/></div>
        </MenuTrigger>

        <MenuPopover>
          <MenuList>
            {/* <MenuItem>New </MenuItem>
            <MenuItem>New Window</MenuItem>
            <MenuItem disabled>Open File</MenuItem>
            <MenuItem>Open Folder</MenuItem> */}
            <ul className="md:hidden flex flex-col gap-2 items-center justify-center text-red-400">
            {contents}
            </ul>
          </MenuList>
        </MenuPopover>
      </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
