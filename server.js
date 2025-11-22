require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
  origin: "https://your-frontend-url.com", // replace with your frontend URL
  credentials: true // allows cookies (HttpOnly JWT)
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
