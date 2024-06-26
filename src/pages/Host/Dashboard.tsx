import starIcon from "@assets/star_icon.svg";
import { Await, Link, Outlet, useLoaderData } from "react-router-dom";
import { Van } from "@utils/types";
import { Suspense } from "react";
import HostVansSkeleton from "@components/skeletons/HostVansSkeleton";
import VanListItem from "@components/VanListItem";

const Dashboard = () => {
  const loaderData = useLoaderData() as { vans: Promise<Van[]> };

  function renderVans(hostVans: Van[]) {
    return hostVans.map((van) => (
      <Link
        key={van.id}
        to={`vans/${van.id}`}
        aria-label={`View details for ${van.name}, priced at ₹${van.price} per hour`}
      >
        <VanListItem van={van} />
      </Link>
    ));
  }

  return (
    <div>
      <div className="p-6 bg-[#FFEAD0] flex justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Welcome!</h1>
          <p>
            Income in last <span className="underline">30 hours</span>
          </p>
          <p className="text-4xl font-bold">₹2,2260</p>
        </div>
        <Link to="income">Details</Link>
      </div>
      <div className="px-6 py-8 bg-[#FFDDB2] flex justify-between">
        <div className="flex items-center gap-1 font-bold tracking-wide">
          <span>Review score</span>
          <img src={starIcon} alt="" className="inline-block w-6 ml-4" />
          <span>5/5</span>
        </div>
        <Link to="reviews">Details</Link>
      </div>
      <div className="px-6">
        <div className="flex justify-between py-6">
          <p className="font-bold text-xl">Your listed vans</p>
          <Link to="vans">View all</Link>
        </div>
        {/* TODO: Add Edit button for host vans */}
        <div className="flex flex-col gap-4">
          <Suspense fallback={<HostVansSkeleton />}>
            <Await resolve={loaderData.vans}>{renderVans}</Await>
          </Suspense>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default Dashboard;
