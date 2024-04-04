import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user_icon.svg";
import logoutIcon from "../assets/logout_icon.svg";
import clsx from "clsx";
import { signOutuser } from "../api";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const Header = () => {
  const contextData = useContext(UserContext);

  async function handleLogout() {
    try {
      await signOutuser();
      contextData?.removeUser();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <header className="flex px-6 py-10 bg-primary items-center border-b-2">
      <Link to="/" className="text-2xl font-black mr-auto hover:underline">
        #VANLIFE
      </Link>
      <nav className="flex gap-4">
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
          <NavLink to="/login" className="rotate-180">
            <img src={logoutIcon} alt="" />
          </NavLink>
        )}
        {contextData?.user && (
          <>
            <NavLink to="/">
              <img src={userIcon} alt="" />
            </NavLink>
            <button onClick={handleLogout}>
              <img src={logoutIcon} alt="" />
            </button>
          </>
        )}
      </nav>
    </header>
  );
};
export default Header;
