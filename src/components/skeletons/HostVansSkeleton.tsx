function HostVansSkeleton() {
  const vanCount = Array.from<number>({ length: 4 });

  const vanList = vanCount.map((i) => (
    <div
      key={i}
      className="flex animate-pulse bg-white p-4 items-center gap-4 rounded-lg"
    >
      <div className="w-20 aspect-square rounded-md bg-skeletonBg">&nbsp;</div>
      <div className="w-full md:w-1/3">
        <p className="font-bold text-xl bg-skeletonBg">&nbsp;</p>
        <p className="text-textGray bg-skeletonBg mt-2">&nbsp;</p>
      </div>
    </div>
  ));

  return vanList;
}

export default HostVansSkeleton;
