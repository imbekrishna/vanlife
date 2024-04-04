import { LoaderFunctionArgs, redirect } from "react-router-dom";

export async function requireAuth(args: LoaderFunctionArgs) {
  const isLoggedIn = !!localStorage.getItem("vanLifeUser");
  if (!isLoggedIn) {
    const url = new URL(args.request.url);
    const path = url.pathname;

    const queryParams = new URLSearchParams({
      message: "You must log in first.",
      redirectTo: path,
    });

    return redirect(`/login?${queryParams.toString()}`);
  }

  return null;
}
