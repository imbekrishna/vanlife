import { Suspense } from "react";
import { Van } from "../../utils/types";
import { Await, useLoaderData } from "react-router-dom";
import HostVansSkeleton from "../../components/skeletons/HostVansSkeleton";
import VansList from "../../components/VansList";

const HostVans = () => {
  const loaderData = useLoaderData() as { vans: Promise<Van[]> };

  return (
    <div className="flex flex-col gap-4 px-6">
      <h1 className="text-4xl font-bold">You listed vans</h1>
      <Suspense fallback={<HostVansSkeleton />}>
        <Await resolve={loaderData.vans}>
          {(vans) => <VansList vans={vans} />}
        </Await>
      </Suspense>
    </div>
  );
};
export default HostVans;
