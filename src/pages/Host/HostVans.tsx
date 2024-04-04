import { Suspense } from "react";
import { Van } from "../../utils/types";
import { Await, Link, useLoaderData } from "react-router-dom";
import HostVansSkeleton from "../../components/skeletons/HostVansSkeleton";

const HostVans = () => {
  const loaderData = useLoaderData() as { vans: Promise<Van[]> };

  function renderVans(hostVans: Van[]) {
    const van = hostVans.map((van) => (
      <Link
        key={van.id}
        to={van.id}
        aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
        className="flex bg-white p-4 items-center gap-4 rounded-lg"
      >
        <img src={van.imageUrl} alt={van.name} className="w-20 rounded-md" />
        <div>
          <p className="text-xl font-bold">{van.name}</p>
          <p className="text-textGray text-lg">${van.price}/day</p>
        </div>
      </Link>
    ));

    return van;
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">You listed vans</h1>
      <Suspense fallback={<HostVansSkeleton />}>
        <Await resolve={loaderData.vans}>{renderVans}</Await>
      </Suspense>
    </div>
  );
};
export default HostVans;
