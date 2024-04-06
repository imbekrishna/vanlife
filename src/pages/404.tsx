import { Link } from "react-router-dom";

const FourOFour = () => {
  return (
    <div className="p-8 flex flex-col justify-center lg:max-w-2xl items-center">
      <h1 className="font-bold text-4xl mb-8 text-center leading-snug">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link
        to="/"
        className="bg-textDark text-white font-semibold py-4 w-full rounded-md text-center"
      >
        Return to home
      </Link>
    </div>
  );
};
export default FourOFour;
