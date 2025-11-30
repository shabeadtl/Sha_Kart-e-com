"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [storedUser, setStoredUser] = useState(null);
  const [error, setError] = useState("");

  // Load user from localStorage when component loads
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setStoredUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!storedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    // Compare stored credentials
    if (
      inputUsername === storedUser.username &&
      inputPassword === storedUser.password
    ) {
      setError("");
      router.push("/");
    } else {
      setError("Invalid username or password ❌");
    }
  };

  return (
    <div className="mt-32 mx-auto max-w-sm bg-white shadow-md rounded-lg p-6">
      <h3 className="text-2xl font-semibold text-center mb-6">Login</h3>

      <form onSubmit={handleLogin} className="space-y-4">

        {/* Username */}
        <div>
          <label className="block mb-1 font-medium">Username</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-green-600"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
            placeholder="Enter username"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-green-600"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>

        {/* Error */}
        {error && <p className="text-red-600 text-sm">{error}</p>}

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-center text-sm">
        Don’t have an account?{" "}
        <a href="/signup" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  );
}
