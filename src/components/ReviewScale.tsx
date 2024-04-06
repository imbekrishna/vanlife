const ReviewScale = ({
  label,
  value,
  total,
}: {
  label: string;
  value: number;
  total: number;
}) => {
  const percentage = parseFloat(((value / total) * 100).toFixed(1));

  return (
    <div className="flex gap-6 items-center">
      <span className="basis-12">{label}</span>
      <div className="flex-1 bg-slate-300 h-2 rounded-full">
        <div
          className="bg-btnPrimary h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="basis-9 text-right">{percentage}%</span>
    </div>
  );
};
export default ReviewScale;
