"use client";

import { signIn, signOut } from "next-auth/react";
import React from "react";

function SignInButton() {
  return <button onClick={() => signIn}>로그인</button>;
}

export default SignInButton;
