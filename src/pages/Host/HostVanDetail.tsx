import { Await, Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { Van } from "@utils/types";
import clsx from "clsx";
import { Suspense } from "react";

const HostVanDetail = () => {
  const loaderData = useLoaderData() as { van: Promise<Van> };

  function renderVan(van: Van) {
    return (
      <div className="lg:max-w-screen-xl mt-6 bg-white p-6 rounded-lg flex flex-col gap-4">
        <div className="flex gap-6 items-center">
          <img
            src={van?.imageUrl}
            alt={van?.name}
            className="rounded-md w-32 aspect-square"
          />
          <div className="flex flex-col gap-1">
            <i className={`van-type ${van?.type} selected`}>{van?.type}</i>
            <h1 className="font-bold text-2xl">{van?.name}</h1>
            <p className="text-lg">
              <span className="font-bold">₹{van?.price}</span>/hour
            </p>
          </div>
        </div>
        <nav className="flex gap-4 text-textGray text-sm">
          <NavLink
            to="."
            state={van}
            end
            className={({ isActive }) =>
              clsx(
                "hover:underline hover:font-bold",
                isActive && "font-bold underline text-textDark"
              )
            }
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            state={van}
            className={({ isActive }) =>
              clsx(
                "hover:underline hover:font-bold",
                isActive && "font-bold underline text-textDark"
              )
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            state={van}
            className={({ isActive }) =>
              clsx(
                "hover:underline hover:font-bold",
                isActive && "font-bold underline text-textDark"
              )
            }
          >
            Photos
          </NavLink>
        </nav>
        <div>
          <Outlet context={van} />
        </div>
      </div>
    );
  }
  return (
    <section className="">
      <p>
        <span className="mr-2">←</span>
        <Link to=".." relative="path" className="underline">
          Back to all vans
        </Link>
      </p>
      <Suspense fallback={<h1>Loading van detail...</h1>}>
        <Await resolve={loaderData.van}>{renderVan}</Await>
      </Suspense>
    </section>
  );
};
export default HostVanDetail;
