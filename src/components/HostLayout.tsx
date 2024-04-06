import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <div className="bg-primary h-full w-full my-4 lg:w-2/3">
      <nav className="flex gap-4 pt-4 pb-8 text-textGray px-6">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            clsx(
              "hover:underline hover:font-bold",
              isActive && "font-bold underline text-textDark"
            )
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) =>
            clsx(
              "hover:underline hover:font-bold",
              isActive && "font-bold underline text-textDark"
            )
          }
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) =>
            clsx(
              "hover:underline hover:font-bold",
              isActive && "font-bold underline text-textDark"
            )
          }
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            clsx(
              "hover:underline hover:font-bold",
              isActive && "font-bold underline text-textDark"
            )
          }
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
export default HostLayout;
