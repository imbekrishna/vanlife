import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import FormInput from "./FormInput";

const Register = () => {
  const message = useLoaderData() as string | null;
  const error = useActionData() as string[] | undefined;
  const navigation = useNavigation();
  return (
    <div className="flex flex-col items-center justify-center w-full my-8 md:w-3/4 lg:w-1/2">
      {message && (
        <p className="p-2 bg-rose-100 w-full text-center rounded-md border-2 border-rose-600 text-rose-600 mb-4">
          {message}
        </p>
      )}
      <h1 className="text-3xl font-bold">Create your account</h1>
      {error && (
        <ul className="p-2 bg-rose-100 w-full rounded-md border-2 border-rose-600 text-rose-600 my-4">
          {error.map((m) => (
            <li>{m}</li>
          ))}
        </ul>
      )}
      <Form replace={true} className="flex flex-col w-full gap-2" method="post">
        <FormInput
          id="name"
          label="Full Name"
          name="name"
          placeholder="John Doe"
          required
        />
        <FormInput
          id="date"
          type="date"
          label="Date of Birth"
          name="dateOfBirth"
          title="Your date of birth."
          required
        />
        <FormInput
          id="email"
          label="Email address"
          type="email"
          name="email"
          placeholder="Email address"
          required
        />
        <FormInput
          id="password"
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          title="Must contain at least one  number and one uppercase and lowercase letter, and at least 6 or more characters"
        />
        <FormInput
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          name="confirmPassword"
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
      <p className="font-semibold  mt-8">
        Already have an account?{" "}
        <Link to="/login" className="text-btnPrimary">
          Login now
        </Link>
      </p>
    </div>
  );
};
export default Register;
