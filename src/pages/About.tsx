import { Link } from "react-router-dom";
import bgImg from "@assets/about_bg.png";

const About = () => {
  return (
    <div className="about-page-container max-w-screen-lg my-8 px-6">
      <img src={bgImg} className="max-w-full rounded-md" />
      <div className="px-6 text-dark mb-14">
        <h1 className="text-4xl font-bold my-8">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="mt-4">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="mx-7 px-8 pb-8 rounded-md bg-[#FFCC8D]">
        <h2 className="py-9 text-3xl font-bold">
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <Link className="link-button bg-textDark text-white" to="/vans">
          Explore our vans
        </Link>
      </div>
    </div>
  );
};
export default About;
