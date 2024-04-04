import { useOutletContext } from "react-router-dom";
import { Van } from "../../utils/types";

const HostVanInfo = () => {
  const vanData: Van = useOutletContext();
  return (
    <div className="flex flex-col gap-4 text-sm">
      <p>
        <span className="font-medium">Name: </span> {vanData.name}
      </p>
      <p>
        <span className="font-medium">Category: </span> {vanData.category}
      </p>
      <p>
        <span className="font-medium">Description: </span> {vanData.description}
      </p>
      <p>
        <span className="font-medium">Visibility: </span> {vanData.visibility}
      </p>
    </div>
  );
};
export default HostVanInfo;
