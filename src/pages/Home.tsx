import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 bg-homePage bg-cover py-10 px-6 text-white">
      <h1 className="font-bold text-4xl max-w-2xl">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="max-w-2xl">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link className="link-button bg-btnPrimary w-full max-w-2xl" to="vans">
        Find your van
      </Link>
    </div>
  );
};
export default Home;
