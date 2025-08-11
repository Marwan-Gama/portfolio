/**
 * Express Server Configuration
 *
 * Main server file that sets up:
 * - Express application with middleware
 * - MongoDB connection
 * - API routes
 * - Error handling
 * - Security configurations
 */

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

// Import routes
import contactRoutes from "./routes/contact.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

/**
 * Security middleware configuration
 * - Helmet for security headers
 * - CORS for cross-origin requests
 * - Body parsing with limits
 */
app.use(helmet());

// CORS configuration for different environments
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

// Body parsing middleware with size limits
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Trust proxy for rate limiting and IP detection
app.set("trust proxy", 1);

/**
 * API Routes
 * Mount all API endpoints
 */
app.use("/api/contact", contactRoutes);

/**
 * Health check endpoint
 * Used for monitoring and deployment verification
 */
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    uptime: process.uptime(),
    memory: process.memoryUsage(),
  });
});

/**
 * 404 handler for undefined routes
 */
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl,
  });
});

/**
 * Global error handler
 * Catches all unhandled errors and provides consistent error responses
 */
app.use((error, req, res, next) => {
  console.error("Global error handler:", error);

  // Log error details for debugging
  console.error("Error details:", {
    message: error.message,
    stack: error.stack,
    url: req.url,
    method: req.method,
    timestamp: new Date().toISOString(),
  });

  res.status(500).json({
    success: false,
    message: "Internal server error",
    ...(process.env.NODE_ENV === "development" && { error: error.message }),
  });
});

/**
 * MongoDB Connection Function
 * Establishes connection to MongoDB with error handling and logging
 */
const connectDB = async () => {
  try {
    console.log("🔌 Connecting to MongoDB...");
    console.log(
      "📡 Connection string:",
      process.env.MONGODB_URI ? "Found" : "Missing"
    );

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // MongoDB connection options
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
    console.log(`🔗 Connection state: ${conn.connection.readyState}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);

    // Provide specific error guidance based on error type
    if (error.code === 8000) {
      console.error("🔐 Authentication failed. Please check:");
      console.error("   - Username and password in your .env file");
      console.error("   - Database user permissions in MongoDB Atlas");
      console.error("   - Network access settings in MongoDB Atlas");
    } else if (error.code === "ENOTFOUND") {
      console.error("🌐 Network error. Please check:");
      console.error("   - Your internet connection");
      console.error("   - MongoDB Atlas cluster status");
    } else if (error.code === "ECONNREFUSED") {
      console.error("🚫 Connection refused. Please check:");
      console.error("   - MongoDB service is running");
      console.error("   - Port and host configuration");
    }

    process.exit(1);
  }
};

/**
 * Server Startup Function
 * Initializes database connection and starts the server
 */
const startServer = async () => {
  try {
    // Connect to database first
    await connectDB();

    // Start the server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
      console.log(`📅 Started at: ${new Date().toISOString()}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

// Start the server
startServer();

/**
 * Graceful Shutdown Handlers
 * Ensures proper cleanup when the server is terminated
 */
const gracefulShutdown = (signal) => {
  console.log(`\n${signal} received, shutting down gracefully`);

  // Close MongoDB connection
  mongoose.connection.close(() => {
    console.log("✅ MongoDB connection closed");
    process.exit(0);
  });

  // Force exit after 10 seconds if graceful shutdown fails
  setTimeout(() => {
    console.error(
      "❌ Could not close connections in time, forcefully shutting down"
    );
    process.exit(1);
  }, 10000);
};

// Handle different termination signals
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("❌ Uncaught Exception:", error);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("❌ Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});
