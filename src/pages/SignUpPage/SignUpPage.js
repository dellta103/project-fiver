import React from "react";
import FormSignUp from "./FormSignUp/FormSignUp";

export default function SignUpPage() {
  return (
    <div
      className="h-screen p-5 w-1/2 ml-auto signUp"
      style={{
        backgroundColor: "#1dbf73",
      }}
    >
      <div>
        <FormSignUp />
      </div>
    </div>
  );
}
