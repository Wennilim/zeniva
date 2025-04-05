import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormFields } from "@/data/formField";
import { Image } from "@/components/shared/Image";
import * as yup from "yup";

type FormData = {
  name: string;
  phone: string;
  email: string;
};

// Validation schema
const schema = yup.object({
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be at least 10 digits"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
});

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form submitted:", data);
    // Add your submission logic here (API call, etc.)
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setValue("phone", value, { shouldValidate: true });
  };

  return (
    <section id="contact-us" className=" p-[64px] flex w-full justify-around relative">
      <div className="flex flex-col">
        <h1 className="text-forest-green font-libre xl:text-[60px] font-semibold mb-8">
          Sign up online
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-14 border border-forest-green space-y-6"
          noValidate
        >
          {FormFields(handlePhoneChange).map(
            ({ id, label, type, placeholder, onChange }) => (
              <FormField
                key={id}
                label={label}
                id={id}
                type={type}
                placeholder={placeholder}
                error={errors[id as keyof FormData]}
                {...register(id as keyof FormData)}
                {...(onChange && { onChange })}
              />
            )
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-tomato-red cursor-pointer text-relax-yellow text-[16px] py-4 rounded-br-full hover:bg-opacity-90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      <div className="bg-mist-green w-[350px] h-[680px] rounded-br-[70%]" />
      <Image src="/contact.png" alt="contact" className="absolute w-[350px] h-[500px] top-[20%] left-[52%] shadow-2xl rounded-br-[70%]" />
    </section>
  );
};

type FormFieldProps = {
  label: string;
  id: string;
  error?: { message?: string };
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, id, error, ...props }, ref) => (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="font-geologica font-bold text-[16px] block"
      >
        {label}
        <span className="text-tomato-red ml-1">*</span>
      </label>
      <div
        className={`bg-white px-4 py-3 rounded-md border ${
          error ? "border-tomato-red" : "border-gray-200"
        } focus-within:border-forest-green transition-colors`}
      >
        <input
          id={id}
          ref={ref}
          className="w-full outline-none bg-transparent"
          {...props}
        />
      </div>
      {error && <p className="text-tomato-red text-sm mt-1">{error.message}</p>}
    </div>
  )
);

FormField.displayName = "FormField";
