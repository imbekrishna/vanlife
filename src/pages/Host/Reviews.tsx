import starIcon from "@assets/star_icon.svg";
import ReviewDetail from "@components/ReviewDetail";
import ReviewScale from "@components/ReviewScale";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      user: "Elliot",
      rating: 4,
      date: Date.now(),
      review:
        "The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
    },
    {
      id: 2,
      user: "Sandy",
      rating: 5,
      date: Date.now(),
      review:
        "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
    },
  ];
  return (
    <div className="px-6">
      <p className="text-textGray">
        <span className="text-2xl text-textDark font-bold mr-4">
          Your reviews
        </span>{" "}
        last <span className="underline font-semibold">30 hours</span>
      </p>

      <div className="flex items-center tracking-wide mt-4">
        <span className="text-2xl font-bold">5.0</span>
        <img src={starIcon} alt="" className="inline-block w-6 ml-2" />
        <span className="inline-block">overall rating</span>
      </div>

      <div className="flex flex-col gap-2 mt-4 text-sm">
        <ReviewScale label="5 stars" total={21} value={10} />
        <ReviewScale label="4 stars" total={21} value={5} />
        <ReviewScale label="3 stars" total={21} value={3} />
        <ReviewScale label="2 stars" total={21} value={2} />
        <ReviewScale label="1 stars" total={21} value={1} />
      </div>

      <div className="mt-8">
        <p className="font-bold tracking-wide">Reviews (2)</p>
        <div className="flex flex-col">
          {reviews.map((review) => (
            <ReviewDetail key={review.id} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Reviews;
