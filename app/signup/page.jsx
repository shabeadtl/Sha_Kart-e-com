"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify({ username, password }));

    setMsg("Signup successful! Please login.");
    setTimeout(() => {
      router.push("/login");
    }, 1200);
  };

  return (
    <div className="mt-32 mx-auto max-w-sm bg-white shadow-md rounded-lg p-6">
      <h3 className="text-2xl font-semibold text-center mb-6">Sign Up</h3>

      <form onSubmit={handleSignup} className="space-y-4">
        
        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Enter Username</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-600"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create password"
            required
          />
        </div>

        {/* Message */}
        {msg && <p className="text-green-600 text-sm">{msg}</p>}

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
