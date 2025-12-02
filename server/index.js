require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mailRoutes = require("./routes/mailRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// ===== PROFESSIONAL CORS HANDLING =====
const allowedOrigins = [process.env.CLIENT_URL, process.env.CLIENT_URL_PROD];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("CORS blocked: Unauthorized origin"), false);
  },
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

app.use(express.json());

// Routes
app.use("/api/mail", mailRoutes);

// Root
app.get("/", (req, res) => res.send("🚀 Abmgroups Email Server Backend Running successfully!!!!!!!!!!"));

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
