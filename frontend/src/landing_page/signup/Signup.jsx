import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signup({ onSuccess }) {
  const [form, setForm] = useState({ email: "", username: "", password: "" });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3002/api/signup", form, {
        withCredentials: true,
      });
      setMsg(res.data.message);
      if (onSuccess) onSuccess();
      // Optionally, redirect to login page after a short success message
      setTimeout(() => navigate("/login"), 1200);
    } catch (err) {
      setMsg(
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : "Signup failed"
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
          Create Account
        </h2>
        {/* Email */}
        <div>
          <label className="block mb-1 text-sm text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:outline-none transition"
            placeholder="your@email.com"
            autoComplete="email"
          />
        </div>
        {/* Username */}
        <div>
          <label
            className="block mb-1 text-sm text-gray-700"
            htmlFor="username"
          >
            Username
          </label>
          <input
            name="username"
            id="username"
            value={form.username}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:outline-none transition"
            placeholder="Choose a username"
            autoComplete="username"
          />
        </div>
        {/* Password */}
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
              type={showPwd ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:outline-none transition"
              placeholder="••••••••"
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowPwd((v) => !v)}
              className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-400 hover:text-purple-500 focus:outline-none"
              tabIndex={-1}
            >
              {showPwd ? (
                // Eye with slash (hide)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9.27-3.11-11-7a12.155 12.155 0 014.67-5.09M3 3l18 18M9.88 9.88A3 3 0 1114.12 14.12M9.88 9.88L14.12 14.12"
                  />
                </svg>
              ) : (
                // Eye (show)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm1-4.938A9.966 9.966 0 0121 12c-1.73 3.89-6 7-11 7s-9.27-3.11-11-7a9.968 9.968 0 014-5.938"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 mt-2 font-semibold text-white rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-md disabled:opacity-60"
        >
          {loading ? "Signing Up..." : "Sign Up"}
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
        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
