require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Import Routes
const mailRoutes = require("./routes/mailRoutes");       // Old route
const enquiryRoutes = require("./routes/enquiryRoutes"); // NEW route
const credaroRoutes = require("./routes/credaroroutes"); // NEW route for Credaro

const app = express();
const PORT = process.env.PORT || 4372;

// ===== PROFESSIONAL CORS HANDLING =====
const allowedOrigins = [
  process.env.CLIENT_URL, 
  process.env.CLIENT_URL_PROD,
  process.env.JK_CLIENT_URL,
  process.env.CREDARO_CLIENT_URL,
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      console.log("Blocked Origin:", origin);
      return callback(new Error("CORS blocked: Unauthorized origin"), false);
    }
  },
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

app.use(express.json());

// Register Routes
app.use("/api/mail", mailRoutes);       // Existing route
app.use("/api/enquiry", enquiryRoutes); // NEW Route for the form
app.use("/api/credaro", credaroRoutes); // NEW Route for Credaro enquiries

// Root Check
app.get("/", (req, res) => res.send("🚀 Server Backend Running successfully!"));

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));