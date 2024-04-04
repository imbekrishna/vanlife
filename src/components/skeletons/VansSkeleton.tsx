const VansSkeleton = () => {
  const count = Array.from<number>({ length: 4 });
  return (
    <div className="w-full my-4 animate-pulse">
      <h1 className="text-4xl font-bold">Explore our van options</h1>
      <div className="flex flex-wrap gap-4 items-center my-6 text-textGray">
        <button className="bg-skeletonBg px-4 py-1 rounded-md flex-1 max-w-16">
          &nbsp;
        </button>
        <button className="bg-skeletonBg px-4 py-1 rounded-md flex-1 max-w-16">
          &nbsp;
        </button>
        <button className="bg-skeletonBg px-4 py-1 rounded-md flex-1 max-w-16">
          &nbsp;
        </button>
        <button className="ml-auto bg-skeletonBg px-4 py-1 rounded-md flex-1 max-w-16">
          &nbsp;
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-8 my-14">
        {count.map((i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="rounded-md aspect-square bg-skeletonBg">&nbsp;</div>
            <div className="flex flex-1 flex-col gap-2">
              <p className="font-bold text-xl bg-skeletonBg">&nbsp;</p>
              <i className="bg-skeletonBg px-4 py-1 rounded-md flex-1 ">
                &nbsp;
              </i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default VansSkeleton;
