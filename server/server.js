import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());

// CORS configuration
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? [
            "https://portfolio-marwan-gama.vercel.app",
            "https://marwan-gama.github.io",
            "https://portfolio-vercel.vercel.app",
            "https://*.vercel.app", // Allow any Vercel subdomain
          ]
        : [
            "http://localhost:3000",
            "http://localhost:3001",
            "http://localhost:5173",
            "http://localhost:4173",
          ],
    credentials: true,
  })
);

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Trust proxy for rate limiting
app.set("trust proxy", 1);

// Routes
app.use("/api/contact", contactRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error("Global error handler:", error);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

// Connect to MongoDB
const connectDB = async () => {
  try {
    console.log("🔌 Connecting to MongoDB...");
    console.log(
      "📡 Connection string:",
      process.env.MONGODB_URI ? "Found" : "Missing"
    );

    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);

    if (error.code === 8000) {
      console.error("🔐 Authentication failed. Please check:");
      console.error("   - Username and password in your .env file");
      console.error("   - Database user permissions in MongoDB Atlas");
      console.error("   - Network access settings in MongoDB Atlas");
    } else if (error.code === "ENOTFOUND") {
      console.error("🌐 Network error. Please check:");
      console.error("   - Your internet connection");
      console.error("   - MongoDB Atlas cluster status");
    }

    process.exit(1);
  }
};

// Start server
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
  });
};

startServer();

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully");
  mongoose.connection.close(() => {
    console.log("MongoDB connection closed");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT received, shutting down gracefully");
  mongoose.connection.close(() => {
    console.log("MongoDB connection closed");
    process.exit(0);
  });
});
