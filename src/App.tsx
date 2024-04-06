import { useContext } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// import "./server";

import About from "@pages/About";
import Home from "@pages/Home";
import Error from "@components/Error";
import HostLayout from "@components/HostLayout";
import Layout from "@components/Layout";
import Login from "@components/Login";
import Register from "@components/Register";
import UserContext from "./context/UserContext";
import FourOFour from "@pages/404";
import Dashboard from "@pages/Host/Dashboard";
import HostVanDetail from "@pages/Host/HostVanDetail";
import HostVanInfo from "@pages/Host/HostVanInfo";
import HostVanPhotos from "@pages/Host/HostVanPhotos";
import HostVanPricing from "@pages/Host/HostVanPricing";
import HostVans from "@pages/Host/HostVans";
import Income from "@pages/Host/Income";
import Reviews from "@pages/Host/Reviews";
import VanDetail from "@pages/Vans/VanDetail";
import Vans from "@pages/Vans/Vans";

import { loginAction, registerAction } from "@utils/actions";
import {
  dashboardLoaader,
  hostVansDetailLoader,
  hostVansLoader,
  incomeLoader,
  layoutLoader,
  loginLoader,
  reviewsLoader,
  vanDetailLoader,
  vansLoader,
} from "@utils/loaders";

const App = () => {
  const userContext = useContext(UserContext);

  const routes = createRoutesFromElements(
    <Route path="/" loader={layoutLoader} element={<Layout />}>
      <Route
        path="login"
        loader={loginLoader}
        action={loginAction(userContext)}
        element={<Login />}
      />
      <Route path="register" action={registerAction} element={<Register />} />
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        loader={vansLoader}
        element={<Vans />}
        errorElement={<Error />}
      />
      <Route
        path="vans/:vanId"
        loader={vanDetailLoader}
        element={<VanDetail />}
        errorElement={<Error />}
      />

      <Route path="host" errorElement={<Error />} element={<HostLayout />}>
        <Route
          index
          loader={dashboardLoaader(userContext)}
          element={<Dashboard />}
        />
        <Route path="income" loader={incomeLoader} element={<Income />} />
        <Route path="reviews" loader={reviewsLoader} element={<Reviews />} />
        <Route
          path="vans"
          loader={hostVansLoader(userContext)}
          element={<HostVans />}
          errorElement={<Error />}
        />

        <Route
          path="vans/:vanId"
          loader={hostVansDetailLoader}
          element={<HostVanDetail />}
          errorElement={<Error />}
        >
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>

      <Route path="*" element={<FourOFour />} />
    </Route>
  );

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
export default App;
