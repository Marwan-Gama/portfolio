import express from "express";
import rateLimit from "express-rate-limit";
// import Contact from "../models/Contact.js";

const router = express.Router();

// Rate limiting: 5 requests per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error:
      "Too many contact form submissions from this IP, please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// POST /api/contact - Submit contact form
router.post("/", contactLimiter, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and message",
      });
    }

    // Email validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    // For testing purposes, log the contact submission instead of saving to database
    console.log("📧 New contact submission:", {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get("User-Agent"),
      timestamp: new Date().toISOString(),
    });

    // Create new contact submission (commented out for testing)
    // const contact = new Contact({
    //   name: name.trim(),
    //   email: email.trim().toLowerCase(),
    //   message: message.trim(),
    //   ipAddress: req.ip || req.connection.remoteAddress,
    //   userAgent: req.get("User-Agent"),
    // });

    // await contact.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
      data: {
        id: Date.now(), // Temporary ID for testing
        name: name.trim(),
        email: email.trim().toLowerCase(),
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Contact form error:", error);

    // Handle MongoDB validation errors (commented out for testing)
    // if (error.name === "ValidationError") {
    //   const messages = Object.values(error.errors).map((err) => err.message);
    //   return res.status(400).json({
    //     success: false,
    //     message: messages.join(", "),
    //   });
    // }

    // Handle duplicate key errors (commented out for testing)
    // if (error.code === 11000) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "A message with this email already exists",
    //   });
    // }

    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
});

// GET /api/contact - Get all contact submissions (for admin purposes)
router.get("/", async (req, res) => {
  try {
    // For testing purposes, return empty array instead of database query
    // const contacts = await Contact.find()
    //   .sort({ createdAt: -1 })
    //   .select("-__v")
    //   .limit(100);

    res.json({
      success: true,
      count: 0,
      data: [],
    });
  } catch (error) {
    console.error("Get contacts error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export default router;
