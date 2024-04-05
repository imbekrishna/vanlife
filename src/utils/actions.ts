import { ActionFunctionArgs, redirect } from "react-router-dom";
import { loginUser, registerUser } from "../api";
import { UserContextType } from "../context/UserContext";

import * as yup from "yup";
import { ValidationError } from "yup";

export function loginAction(context: UserContextType | null) {
  return async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const url = new URL(request.url);
    const redirectPath = url.searchParams.get("redirectTo");

    try {
      const data = await loginUser({ email, password });
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
  const url = new URL(request.url);
  const redirectPath = url.searchParams.get("redirectTo");
  const formData = await request.formData();

  const name = formData.get("name") as string;
  const dateOfBirth = formData.get("dateOfBirth") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Required name length: 3 chars or more."),
    dateOfBirth: yup.date().required("Date of Birth is required."),
    email: yup.string().required("Email is required.").email("Invalid email."),
    password: yup
      .string()
      .required("Password is required.")
      .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, {
        message:
          "Must contain at least one  number, one uppercase and lowercase letter, and at least 6 or more characters",
      }),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match"),
  });

  try {
    const data = await schema.validate(
      {
        name,
        dateOfBirth,
        email,
        password,
        confirmPassword,
      },
      { abortEarly: false }
    );
    const userData = await registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
      dateOfBirth: data.dateOfBirth,
    });
    localStorage.setItem("vanLifeUser", JSON.stringify(userData));
    return redirect(redirectPath ?? "/");
  } catch (err) {
    if (err instanceof ValidationError) {
      return err.errors;
    }
  }
}
