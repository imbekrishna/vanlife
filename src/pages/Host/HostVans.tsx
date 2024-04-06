import { Suspense } from "react";
import { Van } from "@utils/types";
import { Await, Link, useLoaderData } from "react-router-dom";
import HostVansSkeleton from "@components/skeletons/HostVansSkeleton";
import VanListItem from "@components/VanListItem";

const HostVans = () => {
  const loaderData = useLoaderData() as { vans: Promise<Van[]> };

  function renderVans(hostVans: Van[]) {
    const van = hostVans.map((van) => (
      <Link
        key={van.id}
        to={van.id}
        aria-label={`View details for ${van.name}, priced at ₹${van.price} per hour`}
      >
        <VanListItem van={van} />
      </Link>
    ));

    return van;
  }
  return (
    <div className="flex flex-col gap-4 px-6">
      <h1 className="text-4xl font-bold">You listed vans</h1>
      <Suspense fallback={<HostVansSkeleton />}>
        <Await resolve={loaderData.vans}>{renderVans}</Await>
      </Suspense>
    </div>
  );
};
export default HostVans;
