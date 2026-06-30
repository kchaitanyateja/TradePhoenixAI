import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import LogoutButton from "./LogoutButton";

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main
      style={{
        background: "#0d1117",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
      }}
    >
      <h1 style={{ color: "#ff7b00" }}>
        Welcome to TradePhoenix AI 🚀
      </h1>

      <h2>Dashboard</h2>

      <p>You have successfully logged in.</p>
      <p><strong>Email:</strong> {user.email}</p>
    </main>
  );
}