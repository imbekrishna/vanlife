import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard goes here.</h1>
      <Outlet />
    </div>
  );
};
export default Dashboard;
