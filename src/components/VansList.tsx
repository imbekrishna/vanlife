import { Link } from "react-router-dom";
import { Van } from "../utils/types";

const VansList = ({ vans }: { vans: Van[] }) => {
  function renderVans(hostVans: Van[]) {
    const van = hostVans.map((van) => (
      <Link
        key={van.id}
        to={van.id}
        aria-label={`View details for ${van.name}, priced at $${van.price} per hour`}
        className="flex bg-white p-4 items-center gap-4 rounded-lg"
      >
        <img src={van.imageUrl} alt={van.name} className="w-20 rounded-md" />
        <div>
          <p className="text-xl font-bold">{van.name}</p>
          <p className="text-textGray text-lg">${van.price}/hour</p>
        </div>
      </Link>
    ));

    return van;
  }

  return <div className="flex flex-col gap-4">{renderVans(vans)}</div>;
};
export default VansList;
