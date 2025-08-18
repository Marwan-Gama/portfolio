import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import API_CONFIG from "../config/api";
import "../styles/components/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState<"success" | "error">(
    "success"
  );
  const [messageText, setMessageText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get API URL from configuration
  const API_URL = API_CONFIG.getApiUrl();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!formData.name || !formData.email || !formData.message) {
        setMessageType("error");
        setMessageText("Please fill in all fields before submitting.");
        setShowMessage(true);
        return;
      }

      setIsSubmitting(true);

      // Debug logging
      console.log("🌐 API URL being used:", API_URL);
      console.log("📤 Sending data:", formData);

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
          }),
        });

        console.log("📥 Response status:", response.status);
        console.log("📥 Response headers:", response.headers);

        const data = await response.json();
        console.log("📥 Response data:", data);

        if (response.ok && data.success) {
          setMessageType("success");
          setMessageText(
            data.message ||
              "Message sent successfully! I'll get back to you soon."
          );
          setFormData({ name: "", email: "", message: "" });
        } else {
          setMessageType("error");
          setMessageText(
            data.message || "Failed to send message. Please try again."
          );
        }
      } catch (error) {
        console.error("❌ Contact form error:", error);
        setMessageType("error");
        setMessageText(
          "Network error. Please check your connection and try again."
        );
      } finally {
        setIsSubmitting(false);
        setShowMessage(true);
      }
    },
    [formData, API_URL]
  );

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  // Animation variants for faster, smoother animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  return (
    <div className="contact-container">
      <motion.div 
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div 
          className="contact-header"
          variants={itemVariants}
        >
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            I'm always interested in hearing about new opportunities and
            exciting projects. Feel free to reach out if you'd like to connect!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="contact-form-container"
          variants={formVariants}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            {showMessage && (
              <motion.div
                className={
                  messageType === "success"
                    ? "success-message"
                    : "error-message-global"
                }
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {messageText}
              </motion.div>
            )}

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Tell me about your project or opportunity..."
                required
              />
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {isSubmitting ? (
                <>
                  <div className="loading-spinner"></div>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links Section */}
        <motion.div 
          className="social-links-section"
          variants={formVariants}
        >
          <motion.h2 
            className="social-links-title"
            variants={itemVariants}
          >
            Connect With Me
          </motion.h2>
          <motion.div 
            className="social-links-grid"
            variants={containerVariants}
          >
            <motion.a
              href="https://linkedin.com/in/marwan-abu-gama"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-card linkedin"
              variants={socialVariants}
              whileHover="hover"
            >
              <span className="social-icon">💼</span>
              <span className="social-text">LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/Marwan-Gama"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-card github"
              variants={socialVariants}
              whileHover="hover"
            >
              <span className="social-icon">🐙</span>
              <span className="social-text">GitHub</span>
            </motion.a>

            <motion.a
              href="mailto:marwanabugama2000@gmail.com"
              className="social-link-card email"
              variants={socialVariants}
              whileHover="hover"
            >
              <span className="social-icon">📧</span>
              <span className="social-text">Email</span>
            </motion.a>

            <motion.a
              href="tel:+972-50-551-9999"
              className="social-link-card phone"
              variants={socialVariants}
              whileHover="hover"
            >
              <span className="social-icon">📞</span>
              <span className="social-text">Phone</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
