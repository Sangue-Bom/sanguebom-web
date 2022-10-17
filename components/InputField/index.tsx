import { useState } from "react";

// Interface for field attributes
interface InputFieldInterface {
  placeholder: string;
  className?: string;
  validation?: any;
  type?: string;
}

// Interface for error attributes
interface InputFieldErrorInterface {
  status: boolean | null;
  message?: string;
}

// Component for text input and form validation
export default function InputField({
  placeholder,
  className,
  validation,
  type = "text",
}: InputFieldInterface) {

  // State which represents if the input field has an error
  // and its error message
  const [error, setError] = useState<InputFieldErrorInterface>({
    status: null,
    message: "",
  });


  return (
    <>
      {error.status && (
        <span className="font-semibold text-xs text-primary self-start">
          {error.message}
        </span>
      )}
      <input
        placeholder={placeholder}
        className={`${className} ${
          error.status === false && "border-[#00FF00]"
        } ${error.status === true && "border-[#FF0000]"}`}
        onChange={(event) => {
          let value = event.target.value;
          validation(value, setError)}
        }
        type={type}
      />
    </>
  );
}
