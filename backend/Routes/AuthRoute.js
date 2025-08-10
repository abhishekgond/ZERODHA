// import express from "express";
// import UserModel from "../model/UserModel.js";
// import bcrypt from "bcryptjs";

// const router = express.Router();

// router.post("/", async (req, res) => {
//   try {
//     console.log("Received signup:", req.body);

//     const { email, username, password } = req.body;

//     if (!email || !username || !password) {
//       console.log("Missing fields");
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const existingUser = await UserModel.findOne({ email });
//     if (existingUser) {
//       console.log("Email exists");
//       return res.status(409).json({ message: "Email already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new UserModel({
//       email,
//       username,
//       password: hashedPassword,
//     });

//     await newUser.save();
//     console.log("User created:", newUser);

//     res.status(201).json({ message: "Signup successful!" });
//   } catch (err) {
//     console.error("Signup error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// export default router;

import express from "express";
import UserModel from "../model/UserModel.js";
import bcrypt from "bcryptjs";

const router = express.Router();

// =========================
//         SIGNUP
// =========================
router.post("/", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      email,
      username,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "Signup successful!" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error during signup" });
  }
});

// =========================
//         LOGIN
// =========================
router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "All fields are required" });

    const user = await UserModel.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password" });

    res.status(200).json({
      message: "Login successful!",
      user: { email: user.email, username: user.username },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error during login" });
  }
});

export default router;
