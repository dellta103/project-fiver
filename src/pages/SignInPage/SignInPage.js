import React from "react";
import FormSignIn from "./FormSignIn/FormSignIn";

export default function SignInPage() {
  return (
    <div
      className="h-screen p-5 w-1/2 ml-auto signIn"
      style={{
        backgroundColor: "#1dbf73",
      }}
    >
      <div>
        <FormSignIn />
      </div>
    </div>
  );
}
