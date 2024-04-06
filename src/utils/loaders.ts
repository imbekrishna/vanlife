import { defer, type LoaderFunctionArgs, type Params } from "react-router-dom";
import { getHostVans, getVans, getVan } from "../api";

import { requireAuth } from "./utils";
import { UserContextType } from "../context/UserContext";

export async function layoutLoader() {
  const data = localStorage.getItem("vanLifeUser");
  if (!data) return null;
  return JSON.parse(data);
}

export async function vansLoader() {
  return defer({ vans: getVans() });
}

export async function vanDetailLoader({ params }: { params: Params<"vanId"> }) {
  if (!params.vanId)
    throw {
      message: "Parameter vanId is requried",
      statusText: "Bad request",
      status: 400,
    };
  return defer({ van: getVan(params.vanId) });
}

export function dashboardLoaader(context: UserContextType | null) {
  const userId = context?.user?.uid;
  return async (args: LoaderFunctionArgs) => {
    await requireAuth(args);
    if (!userId) return null;
    return defer({ vans: getHostVans(userId) });
  };
}

export async function incomeLoader(args: LoaderFunctionArgs) {
  return await requireAuth(args);
}

export async function reviewsLoader(args: LoaderFunctionArgs) {
  return await requireAuth(args);
}

export function hostVansLoader(context: UserContextType | null) {
  const userId = context?.user?.uid;
  return async (args: LoaderFunctionArgs) => {
    await requireAuth(args);
    if (!userId) return null;
    return defer({ vans: getHostVans(userId) });
  };
}

// TODO: Update function signature

export async function hostVansDetailLoader({
  params,
}: {
  params: Params<"vanId">;
}) {
  if (!params.vanId)
    throw {
      message: "Parameter vanId is requried",
      statusText: "Bad request",
      status: 400,
    };
  return defer({ van: getVan(params.vanId) });
}

export function loginLoader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const message = url.searchParams.get("message");
  return message;
}
