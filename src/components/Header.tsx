import { Link, NavLink } from "react-router-dom";
import userIcon from "@assets/user_icon.svg";
import logoutIcon from "@assets/logout_icon.svg";
import menuIcon from "@assets/menu_icon.svg";
import clsx from "clsx";
import { signOutuser } from "@/api";
import { useContext, useState } from "react";
import UserContext from "@/context/UserContext";

const Header = () => {
  const contextData = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  async function handleLogout() {
    try {
      await signOutuser();
      contextData?.removeUser();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <header className="px-6 py-10 bg-primary items-center border-b-2 sm:flex sm:justify-between sm:items-center">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-black mr-auto hover:underline">
          #VANLIFE
        </Link>
        <img
          src={menuIcon}
          alt=""
          className={clsx(isOpen ? "rotate-45" : "rotate-0", "sm:hidden")}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      <nav
        className={clsx(
          "flex-col gap-4 pt-8 sm:flex sm:p-0 sm:flex-row sm:items-center",
          isOpen ? "flex" : "hidden"
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {contextData?.user && (
          <NavLink
            to="/host"
            className={({ isActive }) =>
              clsx(
                "hover:underline hover:font-bold",
                isActive ? "font-bold underline" : null
              )
            }
          >
            Host
          </NavLink>
        )}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            clsx(
              "hover:underline hover:font-bold",
              isActive ? "font-bold underline" : null
            )
          }
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) =>
            clsx(
              "hover:underline hover:font-bold",
              isActive ? "font-bold underline" : null
            )
          }
        >
          Vans
        </NavLink>
        {!contextData?.user && (
          <NavLink
            to="/login"
            className="flex items-center gap-2 bg-btnPrimary text-white p-2 rounded-md"
          >
            <img src={logoutIcon} alt="" className="invert rotate-180" />{" "}
            <span>Login</span>
          </NavLink>
        )}
        {contextData?.user && (
          <>
            <NavLink
              to="/"
              className="flex items-center gap-2 bg-btnPrimary text-white p-2 rounded-md"
            >
              <img src={userIcon} alt="" className="invert" />{" "}
              <span>Profile</span>
            </NavLink>
            {/* TODO: Move to profile page */}
            <button
              className="flex items-center gap-2 bg-skeletonBg p-2 rounded-md"
              onClick={handleLogout}
            >
              <img src={logoutIcon} alt="" /> <span>Logout</span>
            </button>
          </>
        )}
      </nav>
    </header>
  );
};
export default Header;
