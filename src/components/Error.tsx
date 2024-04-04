import { useRouteError } from "react-router-dom";
import { APIError } from "../utils/types";

const Error = () => {
  const error = useRouteError() as APIError;
  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl pb-4">Error: {error.message}</h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </div>
  );
};
export default Error;
