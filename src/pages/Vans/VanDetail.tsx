import {
  Await,
  Link,
  Navigate,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import { Van } from "@utils/types";
import { Suspense } from "react";
import VanDetailSkeleton from "@components/skeletons/VanDetailSekelton";

const VanDetail = () => {
  const loaderData = useLoaderData() as { van: Promise<Van> };

  const { state } = useLocation();

  function renderVan(van: Van) {
    return (
      <div className="flex flex-col pb-8 gap-4 lg:gap lg:flex-row mt-8">
        <img
          src={van.imageUrl}
          alt={van.name}
          className="rounded-md w-full aspect-square mb-6 lg:mb-0 lg:w-1/2"
        />
        <div className="flex flex-col justify-center gap-4 lg:w-1/2">
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h1 className="font-bold text-3xl">{van.name}</h1>
          <p className="text-xl">
            <span className="font-bold">₹{van.price}</span>/hour
          </p>
          <p>{van.description}</p>
          <Link to="" className="link-button bg-btnPrimary text-white mt-8">
            Rent this van
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="my-4 w-full lg:w-2/3 flex flex-col justify-center">
      <Suspense fallback={<VanDetailSkeleton />}>
        <p>
          <span className="mr-2">←</span>
          <Link
            to={`..?${state?.search ?? ""}`}
            relative="path"
            className="underline"
          >
            Back to {state?.type ?? "all"} vans
          </Link>
        </p>
        <Await resolve={loaderData.van}>
          {(vanData) => (vanData ? renderVan(vanData) : <Navigate to="/404" />)}
        </Await>
      </Suspense>
    </div>
  );
};
export default VanDetail;
