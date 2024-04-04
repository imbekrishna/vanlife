import { ActionFunctionArgs, redirect } from "react-router-dom";
import { loginUser, registerUser } from "../api";
import { UserContextType } from "../context/UserContext";

export function loginAction(context: UserContextType | null) {
  return async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const url = new URL(request.url);
    const redirectPath = url.searchParams.get("redirectTo");

    try {
      const data = await loginUser({ email, password });
      console.log(data);
      if (!data)
        throw {
          message: "User not found",
          statusText: "NO USER",
          status: 404,
        };

      localStorage.setItem("vanLifeUser", JSON.stringify(data));
      context?.setUser({ email: data.email, uid: data.uid });
      return redirect(redirectPath ?? "/");
    } catch (error) {
      return error;
    }
  };
}

export async function registerAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const url = new URL(request.url);
  const redirectPath = url.searchParams.get("redirectTo");

  try {
    const data = await registerUser({ name, email, password });
    localStorage.setItem("vanLifeUser", JSON.stringify(data));
    return redirect(redirectPath ?? "/");
  } catch (error) {
    return error;
  }
}
