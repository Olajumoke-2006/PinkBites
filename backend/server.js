const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");

// Load environment variables
dotenv.config();

const connectDB = require("./config/db");
const sessionMiddleware = require("./middleware/sessionMiddleware");
const chatRoutes = require("./routes/chatRoutes");
const seedMenu = require("./utils/menuSeeder");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();


// ======================
// Connect Database
// ======================

connectDB()
  .then(async () => {
    console.log("✅ Database connected successfully");

    await seedMenu();
  })
  .catch((error) => {
    console.error("❌ Database startup failed:", error.message);
    process.exit(1);
  });


// ======================
// Middlewares
// ======================

app.use(express.json());


// ======================
// CORS Configuration
// ======================

const allowedOrigins = [
  "http://localhost:5173",
  "https://pink-bites.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {

      // Allow Postman/mobile apps with no origin
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },

    credentials: true,
  })
);


app.use(cookieParser());


// ======================
// Session Setup
// ======================

app.use(
  session({
    secret: process.env.SESSION_SECRET || "PinkBitesSecret123",

    resave: false,

    saveUninitialized: true,

    cookie: {
      maxAge: 1000 * 60 * 60 * 24,

      // Required for Vercel + Render
      secure: true,

      sameSite: "none",
    },
  })
);


// ======================
// Create Device Session ID
// ======================

app.use((req, res, next) => {

  if (!req.session.deviceId) {

    req.session.deviceId = uuidv4();

  }

  next();

});


// Save session
app.use(sessionMiddleware);


// ======================
// Routes
// ======================


app.get("/", (req, res) => {

  res.json({

    success: true,

    message: "🍽️ PinkBites AI Restaurant Chatbot API",

    deviceId: req.session.deviceId,

  });

});


app.use("/api/chat", chatRoutes);

app.use("/api/payment", paymentRoutes);


// ======================
// 404 Handler
// ======================

app.use((req, res) => {

  res.status(404).json({

    success: false,

    message: "Route not found",

  });

});


// ======================
// Error Handler
// ======================

app.use((err, req, res, next) => {

  console.error(err.stack);

  res.status(500).json({

    success: false,

    message: "Internal server error",

  });

});


// ======================
// Start Server
// ======================

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

  console.log(`🚀 PinkBites server running on port ${PORT}`);

});