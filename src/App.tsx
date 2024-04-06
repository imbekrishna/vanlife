import React, { useContext } from "react";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";

// import "./server";

const Error = React.lazy(() => import("@components/Error"));
const Layout = React.lazy(() => import("@components/Layout"));
const FourOFour = React.lazy(() => import("@pages/404"));

import UserContext from "./context/UserContext";
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

  const routeObject: RouteObject[] = [
    {
      path: "/",
      loader: layoutLoader,
      element: <Layout />,
      children: [
        {
          index: true,
          lazy: async () => {
            const Home = await import("@pages/Home");
            return { Component: Home.default };
          },
        },
        {
          path: "login",
          loader: loginLoader,
          action: loginAction(userContext),
          lazy: async () => {
            const Login = await import("@components/Login");
            return { Component: Login.default };
          },
        },
        {
          path: "register",
          action: registerAction,
          lazy: async () => {
            const Register = await import("@components/Register");
            return { Component: Register.default };
          },
        },
        {
          path: "profile",
          loader: async (args) => {
            if (!userContext?.user) {
              const url = new URL(args.request.url);
              const path = url.pathname;

              const queryParams = new URLSearchParams({
                message: "You must log in first.",
                redirectTo: path,
              });

              return redirect(`/login?${queryParams.toString()}`);
            }
            return null;
          },
          lazy: async () => {
            const Profile = await import("@pages/Profile");
            return { Component: Profile.default };
          },
        },
        {
          path: "about",
          lazy: async () => {
            const About = await import("@pages/About");
            return { Component: About.default };
          },
        },
        {
          path: "vans",
          loader: vansLoader,
          lazy: async () => {
            const Vans = await import("@pages/Vans/Vans");
            return { Component: Vans.default };
          },
        },
        {
          path: "vans/:vanId",
          loader: vanDetailLoader,
          errorElement: <Error />,
          lazy: async () => {
            const VanDetail = await import("@pages/Vans/VanDetail");
            return { Component: VanDetail.default };
          },
        },
        {
          path: "host",
          errorElement: <Error />,
          lazy: async () => {
            const HostLayout = await import("@components/HostLayout");
            return { Component: HostLayout.default };
          },

          children: [
            {
              index: true,
              loader: dashboardLoaader(userContext),
              lazy: async () => {
                const Dashboard = await import("@pages/Host/Dashboard");
                return { Component: Dashboard.default };
              },
            },
            {
              path: "income",
              loader: incomeLoader,
              lazy: async () => {
                const Income = await import("@pages/Host/Income");
                return { Component: Income.default };
              },
            },
            {
              path: "reviews",
              loader: reviewsLoader,
              lazy: async () => {
                const Reviews = await import("@pages/Host/Reviews");
                return { Component: Reviews.default };
              },
            },
            {
              path: "vans",
              loader: hostVansLoader(userContext),
              errorElement: <Error />,
              lazy: async () => {
                const HostVans = await import("@pages/Host/HostVans");
                return { Component: HostVans.default };
              },
            },
            {
              path: "vans/:vanId",
              loader: hostVansDetailLoader,
              errorElement: <Error />,
              lazy: async () => {
                const HostVanDetail = await import("@pages/Host/HostVanDetail");
                return { Component: HostVanDetail.default };
              },
              children: [
                {
                  index: true,
                  lazy: async () => {
                    const HostVanInfo = await import("@pages/Host/HostVanInfo");
                    return { Component: HostVanInfo.default };
                  },
                },
                {
                  path: "pricing",
                  lazy: async () => {
                    const HostVanPricing = await import(
                      "@pages/Host/HostVanPricing"
                    );
                    return { Component: HostVanPricing.default };
                  },
                },
                {
                  path: "photos",
                  lazy: async () => {
                    const HostVanPhotos = await import(
                      "@pages/Host/HostVanPhotos"
                    );
                    return { Component: HostVanPhotos.default };
                  },
                },
              ],
            },
          ],
        },
        {
          path: "*",
          element: <FourOFour />,
        },
        {
          path: "404",
          element: <FourOFour />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routeObject);

  return <RouterProvider router={router} />;
};
export default App;
