import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login({ onSuccess }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3002/login", form, {
        withCredentials: true,
      });
      setMsg(res.data.message);
      if (onSuccess) onSuccess();
    } catch (err) {
      setMsg(
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-blue-100 to-purple-200">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 m-4 space-y-5"
      >
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Login
        </h2>
        <div>
          <label className="block mb-1 text-sm text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            id="email"
            placeholder="Enter your email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:outline-none transition"
            autoComplete="email"
          />
        </div>
        <div>
          <label
            className="block mb-1 text-sm text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              name="password"
              id="password"
              placeholder="Password"
              type={showPwd ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:outline-none transition"
              autoComplete="current-password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-purple-500"
              tabIndex={-1}
              onClick={() => setShowPwd((v) => !v)}
            >
              {showPwd ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 mt-2 font-semibold text-white rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-md disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        {msg && (
          <p
            className={`text-center mt-2 font-medium ${
              msg.includes("success") ? "text-green-600" : "text-red-500"
            }`}
          >
            {msg}
          </p>
        )}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-purple-600 hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}
