import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { APIError } from "../utils/types";

const Register = () => {
  // TODO: add message and redirect for login as well

  const message = useLoaderData() as string | null;
  const error = useActionData() as APIError | undefined;
  const navigation = useNavigation();

  return (
    <div className="flex flex-col items-center justify-center w-full md:w-3/4 lg:w-1/2">
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
      <h1 className="text-3xl font-bold">Create your account</h1>
      <Form replace={true} className="flex flex-col w-full my-8" method="post">
        <input
          className="py-2 px-4 rounded-t-md border-t-2 border-x-2 placeholder:text-textGray"
          type="text"
          name="name"
          placeholder="Full Name"
          required
        />
        <input
          className="py-2 px-4 border-t-2 border-x-2 text-textGray placeholder:text-textGray"
          type="date"
          name="dateofbirth"
          title="Your date of birth."
          required
        />
        <input
          className="py-2 px-4 border-t-2 border-x-2 placeholder:text-textGray"
          type="email"
          name="email"
          placeholder="Email address"
          required
        />
        <input
          className="py-2 px-4 border-t-2 border-x-2 placeholder:text-textGray"
          type="password"
          name="password"
          placeholder="Password"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          title="Must contain at least one  number and one uppercase and lowercase letter, and at least 6 or more characters"
        />
        <input
          className="py-2 px-4 rounded-b-md border-2 placeholder:text-textGray"
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          required
        />
        <button
          className="bg-btnPrimary rounded-md py-3 font-semibold mt-4 text-white disabled:bg-textGray"
          type="submit"
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting" ? "Creating..." : "Create account"}
        </button>
      </Form>
      <p className="font-semibold">
        Already have an account?{" "}
        <Link to="/login" className="text-btnPrimary">
          Login now
        </Link>
      </p>
    </div>
  );
};
export default Register;
