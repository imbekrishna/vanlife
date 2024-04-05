import { InputHTMLAttributes } from "react";

interface IFormInput extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  name: string;
}

const FormInput = (props: IFormInput) => {
  return (
    <div id={Math.random().toString()} className="flex flex-col gap-1">
      <label htmlFor={props.id} className="font-medium">
        {props.label}
      </label>
      <input
        className="py-2 px-4 text-md rounded-md border-2 border-textGray placeholder:text-textGray"
        {...props}
      />
    </div>
  );
};
export default FormInput;
