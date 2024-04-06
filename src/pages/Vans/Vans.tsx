import { Van } from "../../utils/types";
import { Link, useSearchParams, useLoaderData, Await } from "react-router-dom";
import clsx from "clsx";
import { Suspense } from "react";
import VansSkeleton from "../../components/skeletons/VansSkeleton";

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const loaderData = useLoaderData() as { vans: Promise<Van[]> };

  const typeFilter = searchParams.get("type");

  function renderVanElements(vans: Van[]) {
    const filteredVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;

    const vanElements = filteredVans.map((van) => (
      <div key={van.id}>
        <Link
          to={van.id}
          state={{ search: searchParams.toString(), type: typeFilter }}
          aria-label={`View details for ${van.name}, priced at $${van.price} per hour`}
          className="flex flex-col gap-2"
        >
          <img className="max-w-full rounded-md" src={van.imageUrl} />
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl">{van.name}</p>
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
            <p className="text-xl font-medium">
              ${van.price}
              <span className="block text-sm font-normal text-right">
                /hour
              </span>
            </p>
          </div>
        </Link>
      </div>
    ));

    return (
      <>
        <div className="flex flex-wrap gap-4 items-center my-6 text-textGray">
          {/* FIXME: Update the selected filter colors */}
          <button
            onClick={() => handleFilterChange("type", "simple")}
            className="bg-[#FFEAD0] px-4 py-1 rounded-md"
          >
            Simple
          </button>
          <button
            onClick={() => handleFilterChange("type", "luxury")}
            className="bg-[#FFEAD0] px-4 py-1 rounded-md"
          >
            Luxury
          </button>
          <button
            onClick={() => handleFilterChange("type", "rugged")}
            className="bg-[#FFEAD0] px-4 py-1 rounded-md"
          >
            Rugged
          </button>
          <button
            onClick={() => handleFilterChange("type", null)}
            className={clsx("underline", !typeFilter && "hidden")}
          >
            Clear filters
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-8 my-14">
          {vanElements}
        </div>
      </>
    );
  }

  const handleFilterChange = (key: string, value: string | null) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  return (
    <div className="w-full my-4 px-6">
      <h1 className="text-4xl font-bold">Explore our van options</h1>
      <Suspense fallback={<VansSkeleton />}>
        <Await resolve={loaderData.vans}>{renderVanElements}</Await>
      </Suspense>
    </div>
  );
};

export default Vans;
