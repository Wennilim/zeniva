export const FormFields = (handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void) => [
  {
    label: "Name",
    id: "name",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    label: "Phone Number",
    id: "phone",
    type: "tel",
    placeholder: "Enter your phone number",
    onChange: handlePhoneChange,
  },
  {
    label: "Email",
    id: "email",
    type: "email",
    placeholder: "Enter your email",
  },
];