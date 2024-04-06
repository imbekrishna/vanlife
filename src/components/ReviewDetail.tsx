import starIcon from "../assets/star_icon.svg";

const ReviewDetail = ({
  user,
  rating,
  review,
  date,
}: {
  user: string;
  rating: number;
  review: string;
  date: string | number;
}) => {
  const dateFormatter = (date: string | number) => {
    const formatter = new Intl.DateTimeFormat("en-IN", {
      dateStyle: "long",
    });
    return formatter.format(new Date(date));
  };
  return (
    <div className="border-b-2 py-4">
      <div className="flex gap-1">
        {Array.from<number>({ length: rating }).map((i) => (
          <img key={i} src={starIcon} alt="" />
        ))}
      </div>

      <p className="my-2 text-sm">
        <span className="font-semibold tracking-wide">{user}</span>{" "}
        <span className="font-medium text-textGray">{dateFormatter(date)}</span>
      </p>

      <p className="text-sm tracking-wide">{review}</p>
    </div>
  );
};
export default ReviewDetail;
