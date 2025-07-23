import React from "react";

export default function App() {
  const whatsappNumber = "2348034445666";
  const calendlyLink = "https://calendly.com/sincereemmy";

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Kujo's Website</h1>
      <p className="mb-8">Let's connect or schedule a meeting.</p>

      <div className="flex gap-4">
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hi%20Kujo%2C%20I%E2%80%99d%20like%20to%20connect%20with%20you`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Chat on WhatsApp
        </a>

        <a
          href={calendlyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Book a Meeting
        </a>
      </div>
    </div>
  );
}