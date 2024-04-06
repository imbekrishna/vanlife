import { useOutletContext } from "react-router-dom";
import { Van } from "@utils/types";

const HostVanPhotos = () => {
  const vanData: Van = useOutletContext();
  return (
    <div>
      <img src={vanData.imageUrl} alt="" className="rounded-md w-24" />
    </div>
  );
};
export default HostVanPhotos;
