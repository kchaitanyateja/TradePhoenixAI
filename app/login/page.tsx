"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export default function LoginPage() {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const router = useRouter();

const signUp = async () => {
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Account created! Please check your email.");
  }
};

const signIn = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert(error.message);
  } else {
  router.push("/dashboard");
}
};


  return (
    <main
      style={{
        background: "#0d1117",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#161b22",
          padding: "40px",
          borderRadius: "15px",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#ff7b00" }}>TradePhoenix AI</h1>

        <h2 style={{ color: "white" }}>
          Welcome Back
        </h2>

        <p style={{ color: "#999" }}>
          Sign in to continue your trading journey.
        </p>

<input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    marginTop: "20px",
    borderRadius: "8px",
    color: "white",
    background: "#0d1117",
    border: "1px solid #333",
  }}
/>

<input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    borderRadius: "8px",
    color: "white",
    background: "#0d1117",
    border: "1px solid #333",
  }}
/>

        <button
  onClick={signIn}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "20px",
            background: "#ff7b00",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        <p style={{ color: "#999", marginTop: "20px" }}>
          Forgot Password?
        </p>

        <p style={{ color: "white" }}>
          Don't have an account?
        </p>

        <button
        onClick={signUp}
          style={{
            background: "transparent",
            color: "#ff7b00",
            border: "1px solid #ff7b00",
            padding: "10px 20px",
            borderRadius: "8px",
          }}
        >
          Create Account
        </button>
      </div>
    </main>
  );
}
