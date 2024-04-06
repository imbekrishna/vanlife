import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { APIError } from "@utils/types";

const Login = () => {
  const message = useLoaderData() as string | null;
  const error = useActionData() as APIError | undefined;
  const navigation = useNavigation();

  return (
    <div className="flex flex-col items-center justify-center w-full md:w-3/4 lg:w-1/2 px-6">
      {message && (
        <p className="p-2 bg-rose-100 w-full text-center rounded-md border-2 border-rose-600 text-rose-600 mb-4">
          {message}
        </p>
      )}
      {error && (
        <p className="p-2 bg-rose-100 w-full text-center rounded-md border-2 border-rose-600 text-rose-600 mb-4">
          {error.message}
        </p>
      )}
      <h1 className="text-3xl font-bold">Sign in to your account</h1>
      <Form replace={true} className="flex flex-col w-full my-8" method="post">
        <input
          className="py-2 px-4 rounded-t-md border-t-2 border-x-2 placeholder:text-textGray"
          type="email"
          name="email"
          placeholder="Email address"
          required
        />
        <input
          className="py-2 px-4 rounded-b-md border-2 placeholder:text-textGray"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button
          className="bg-btnPrimary rounded-md py-3 font-semibold mt-4 text-white disabled:bg-textGray"
          type="submit"
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
      <p className="font-semibold">
        Don't have an account?{" "}
        <Link to="/register" className="text-btnPrimary">
          Create one now
        </Link>
      </p>
    </div>
  );
};
export default Login;
