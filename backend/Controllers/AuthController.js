import { createSecretToken } from "../Util/SecretToken.js";
import bcrypt from "bcryptjs";
import validator from "validator";
import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

// ==========================
//         SIGNUP
// ==========================
export const Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username)
      return res.status(400).json({ message: "All fields are required" });

    if (!validator.isEmail(email))
      return res.status(400).json({ message: "Invalid email format" });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({ message: "User already exists" });

    // Pasword Validation
    const isStrongPassword = (password) => {
      const minLength = 8;
      const hasAlphabet = /[a-zA-Z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      return (
        password.length >= minLength &&
        hasAlphabet &&
        hasNumber &&
        hasSpecialChar
      );
    };

    if (!isStrongPassword(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 6 characters and include a letter, number, and special character",
      });
    }

    const user = await User.create({ email, password, username });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production", // true in production (HTTPS)
    });

    // console.log("Signup token:", token); // ✅ Token logged to console

    res.status(201).json({
      message: "User signed up successfully",
      user: { email: user.email, username: user.username },
    });
  } catch (err) {
    res.status(500).json({ message: "Signup error", error: err.message });
  }
};

// ==========================
//         LOGIN
// ==========================
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "All fields are required" });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid email or password" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(401).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    console.log("Login token:", token); // ✅ Token logged to console

    res.status(200).json({
      message: "Login successful",
      token, // ✅ optional: frontend can store this
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Login error", error: err.message });
  }
};
