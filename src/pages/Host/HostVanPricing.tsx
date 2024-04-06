import { useOutletContext } from "react-router-dom";
import { Van } from "@utils/types";

const HostVanPricing = () => {
  const vanData: Van = useOutletContext();
  return (
    <p className="text-textGray">
      <span className="text-xl font-medium text-textDark">
        ₹{vanData.price}
      </span>
      /hour
    </p>
  );
};
export default HostVanPricing;
