import React from "react";
import ContactForm from "../components/ContactForm";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-8">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Contact Us
        </h2>
        <ContactForm />
      </div>
    </div>
  );
}