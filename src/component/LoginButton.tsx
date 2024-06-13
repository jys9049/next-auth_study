"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const LoginButton = () => {
  const session = useSession();

  console.log(session);

  return session && session.data ? (
    <button
      onClick={() =>
        signOut({ callbackUrl: "http://localhost:3000/login", redirect: true })
      }
    >
      logOut
    </button>
  ) : (
    <button onClick={() => signIn("google")}>login</button>
  );
};

export default LoginButton;
