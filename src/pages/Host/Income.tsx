import starIcon from "../../assets/star_icon.svg";
import ReviewScale from "../../components/ReviewScale";

const Income = () => {
  return (
    <div className="px-6">
      <p className="text-textGray">
        <span className="text-2xl text-textDark font-bold mr-4">
          Your reviews
        </span>{" "}
        last <span className="underline font-semibold">30 days</span>
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
    </div>
  );
};
export default Income;
