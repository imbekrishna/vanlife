import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

// import "./server";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanInfo from "./pages/Host/HostVanInfo";
import FourOFour from "./pages/404";
import Error from "./components/Error";
import Login from "./components/Login";
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
} from "./utils/loaders";
import { loginAction, registerAction } from "./utils/actions";
import Register from "./components/Register";
import { useContext } from "react";
import UserContext from "./context/UserContext";

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

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          loader={dashboardLoaader(userContext)}
          element={<Dashboard />}
        />
        <Route path="income" loader={incomeLoader} element={<Income />} />
        <Route path="reviews" loader={reviewsLoader} element={<Reviews />} />
        <Route
          path="vans"
          loader={hostVansLoader}
          element={<HostVans />}
          errorElement={<Error />}
        />

        <Route
          path="vans/:vanId"
          loader={hostVansDetailLoader}
          element={<HostVanDetail />}
          errorElement={<Error />}
        >
          {/* TODO: Refactor component locations */}
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
