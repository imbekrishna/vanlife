import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();

  if (!state) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col gap-4 text-sm">
      <p>
        <span className="font-medium">Name: </span> {state.name}
      </p>
      <p>
        <span className="font-medium">Category: </span> {state.category}
      </p>
      <p>
        <span className="font-medium">Description: </span> {state.description}
      </p>
      <p>
        <span className="font-medium">Visibility: </span> {state.visibility}
      </p>
    </div>
  );
};
export default Details;
