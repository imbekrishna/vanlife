import { Van } from "../utils/types";

const VanListItem = ({ van }: { van: Van }) => {
  return (
    <div className="flex bg-white p-4 items-center gap-4 rounded-lg">
      <img src={van.imageUrl} alt={van.name} className="w-20 rounded-md" />
      <div>
        <p className="text-xl font-bold">{van.name}</p>
        <p className="text-textGray text-lg">₹{van.price}/hour</p>
      </div>
    </div>
  );
};
export default VanListItem;
