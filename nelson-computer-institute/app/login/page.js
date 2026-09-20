"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function submit(e) {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("nci_admin", "1");
      router.push("/admin");
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <main className="loginPage">
      <div className="loginCard">
        <div className="logo big">NCI</div>

        <h1>Admin / Branch Login</h1>
        <p>Nelson Computer Institute</p>

        <form onSubmit={submit}>
          <label>Username</label>

          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />

          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />

          {error && <div className="error">{error}</div>}

          <button type="submit" className="btn primary full">
            LOGIN
          </button>
        </form>

        <small>Demo login: admin / admin123</small>
      </div>
    </main>
  );
}
