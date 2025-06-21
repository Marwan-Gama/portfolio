// Simple test script for the contact API
const API_URL = "http://localhost:5000/api";

async function testAPI() {
  console.log("🧪 Testing Portfolio Contact API...\n");

  // Test health endpoint
  try {
    const healthResponse = await fetch(`${API_URL}/health`);
    const healthData = await healthResponse.json();
    console.log("✅ Health check:", healthData.message);
  } catch (error) {
    console.log("❌ Health check failed:", error.message);
  }

  // Test contact form submission
  try {
    const contactData = {
      name: "Test User",
      email: "test@example.com",
      message: "This is a test message from the API test script.",
    };

    const contactResponse = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    const contactResult = await contactResponse.json();

    if (contactResponse.ok) {
      console.log(
        "✅ Contact form submission successful:",
        contactResult.message
      );
      console.log("📧 Message ID:", contactResult.data.id);
    } else {
      console.log("❌ Contact form submission failed:", contactResult.message);
    }
  } catch (error) {
    console.log("❌ Contact form test failed:", error.message);
  }

  // Test getting all contacts
  try {
    const getContactsResponse = await fetch(`${API_URL}/contact`);
    const contactsData = await getContactsResponse.json();

    if (getContactsResponse.ok) {
      console.log(`✅ Retrieved ${contactsData.count} contact submissions`);
    } else {
      console.log("❌ Failed to retrieve contacts:", contactsData.message);
    }
  } catch (error) {
    console.log("❌ Get contacts test failed:", error.message);
  }

  console.log("\n🏁 API testing completed!");
}

// Run the test if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testAPI();
}

export default testAPI;
