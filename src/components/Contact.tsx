import { useState, useCallback } from "react";
import "../styles/components/Contact.css";

// Type definitions for better type safety
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

type MessageType = "success" | "error";

const Contact = () => {
  // State management for form data
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // State management for UI feedback
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState<MessageType>("success");
  const [messageText, setMessageText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Handle input changes for form fields
   * Updates the form data state when user types
   */
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

  /**
   * Validate form data before submission
   * Returns true if all required fields are filled
   */
  const validateForm = (data: FormData): boolean => {
    return !!(data.name.trim() && data.email.trim() && data.message.trim());
  };

  /**
   * Show message to user with specified type and text
   */
  const showUserMessage = (type: MessageType, text: string) => {
    setMessageType(type);
    setMessageText(text);
    setShowMessage(true);
  };

  /**
   * Reset form data to empty state
   */
  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  /**
   * Handle form submission to Web3Forms API
   * Sends form data and handles response/errors
   */
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Validate form data
      if (!validateForm(formData)) {
        showUserMessage(
          "error",
          "Please fill in all fields before submitting."
        );
        return;
      }

      // Start submission process
      setIsSubmitting(true);
      showUserMessage("success", "Sending...");

      try {
        // Prepare form data for Web3Forms API
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name.trim());
        formDataToSend.append("email", formData.email.trim());
        formDataToSend.append("message", formData.message.trim());
        formDataToSend.append(
          "access_key",
          "0f7485d4-8dfd-4e2b-9746-8d221bab5b7e" // Web3Forms access key
        );

        // Send request to Web3Forms API
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formDataToSend,
        });

        // Check if request was successful
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse response data
        const data: Web3FormsResponse = await response.json();

        // Handle API response
        if (data.success) {
          showUserMessage(
            "success",
            "Message sent successfully! I'll get back to you soon."
          );
          resetForm();
        } else {
          showUserMessage(
            "error",
            data.message || "Failed to send message. Please try again."
          );
        }
      } catch (error) {
        // Handle network and API errors
        console.error("❌ Contact form error:", error);

        // Type-safe error handling
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";

        // Show user-friendly error message
        showUserMessage(
          "error",
          "Network error. Please check your connection and try again."
        );
      } finally {
        // Always stop loading state
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  /**
   * Close the message display
   */
  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Header Section */}
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            I'm always interested in hearing about new opportunities and
            exciting projects. Feel free to reach out if you'd like to connect!
          </p>
        </div>

        {/* Main Content - Form and Social Links Side by Side */}
        <div className="contact-main-content">
          {/* Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Success/Error Message Display */}
              {showMessage && (
                <div
                  className={
                    messageType === "success"
                      ? "success-message"
                      : "error-message-global"
                  }
                >
                  {messageText}
                </div>
              )}

              {/* Name Input Field */}
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

              {/* Email Input Field */}
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

              {/* Message Textarea */}
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

              {/* Submit Button */}
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Social Links Section */}
          <div className="social-links-section">
            <div className="social-links-header">
              <h2 className="social-links-title">Connect With Me</h2>
              <div className="social-links-grid">
                {/* LinkedIn Link */}
                <a
                  href="https://linkedin.com/in/marwan-abu-gama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-card linkedin"
                >
                  <span className="social-icon">💼</span>
                  <span className="social-text">LinkedIn</span>
                </a>

                {/* GitHub Link */}
                <a
                  href="https://github.com/Marwan-Gama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-card github"
                >
                  <span className="social-icon">🐙</span>
                  <span className="social-text">GitHub</span>
                </a>

                {/* Email Link */}
                <a
                  href="mailto:marwanabugama2000@gmail.com"
                  className="social-link-card email"
                >
                  <span className="social-icon">📧</span>
                  <span className="social-text">Email</span>
                </a>

                {/* Phone/WhatsApp Link */}
                <a
                  href="https://wa.me/972505519999"
                  target="_blank"
                  className="social-link-card phone"
                >
                  <span className="social-icon">📞</span>
                  <span className="social-text">Phone</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
