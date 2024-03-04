const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

let mongoURI =
  process.env.NODE_ENV === "test"
    ? process.env.MONGO_TEST_URI
    : process.env.MONGO_URI;

mongoose;
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // This replaces the useFindAndModify option
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get(["/", "/home"], (req, res) => {
  res.send("Welcome to the home page!");
});

app.get(["/commands", "/commandlist"], (req, res) => {
  res.send("Here is a list of commands!");
});

app.get("/commands/:commandName", (req, res) => {
  const commandName = req.params.commandName;
  res.send(`Here is the usage for ${commandName} command!`);
});

app.get(["/settings", "/config"], (req, res) => {
  res.send("Welcome to the settings page!");
});

app.get(["/about", "/info"], (req, res) => {
  res.send("Welcome to the about page!");
});

// User schema and model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);

// Route for registration
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username or email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const user = new User({ username, email, password: hashedPassword });

    // Save the user to the database
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error); // Log the error for debugging
    res.status(500).json({ error: "Failed to register user" });
  }
});

// Route for login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  // Generate JWT token
  const token = jwt.sign({ username: user._id }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
  const userInfo = { ...user.toObject(), password: undefined };
  res
    .cookie("accessToken", token, { httpOnly: true })
    .status(200)
    .json(userInfo);
});

app.post("/logout", (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json({ message: "Logout successful" });
});

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

module.exports = server;
