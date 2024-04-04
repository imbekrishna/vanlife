const VanDetailSkeleton = () => {
  return (
    <div className="my-4 w-full lg:w-2/3 animate-pulse flex flex-col justify-center">
      <p className="bg-skeletonBg py-1 max-w-60">&nbsp;</p>
      <div className="flex flex-col pb-8 gap-4 lg:gap lg:flex-row mt-8">
        <div className="rounded-md min-w-[464px] aspect-square bg-skeletonBg mb-6 lg:mb-0">
          &nbsp;
        </div>
        <div className="flex flex-col justify-center gap-4 lg:w-1/2">
          <i className="bg-skeletonBg px-4 py-2 rounded-md max-w-16">&nbsp;</i>
          <h1 className="font-bold text-3xl bg-skeletonBg">&nbsp;</h1>
          <p className="font-bold text-xl bg-skeletonBg w-1/2">&nbsp;</p>
          <div>
            <p className="font-bold text-xl bg-skeletonBg">&nbsp;</p>
            <p className="font-bold text-xl bg-skeletonBg">&nbsp;</p>
            <p className="font-bold text-xl bg-skeletonBg">&nbsp;</p>
            <p className="font-bold text-xl bg-skeletonBg">&nbsp;</p>
          </div>
          <div className="link-button bg-skeletonBg text-white mt-8">
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
};
export default VanDetailSkeleton;
